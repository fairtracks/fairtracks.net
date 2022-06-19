import {
  G_GET_ALL_REPOS,
  G_GET_REPO_BRANCH_NAMES,
  M_REGISTER_REPOS,
  M_ADD_REPO_INFO,
  M_ADD_BRANCHES,
  M_ADD_CHILD_COMMITS,
  A_INIT_REPOS,
  A_GATHER_REPO_INFO,
  A_GATHER_BRANCHES,
  A_GATHER_CHILD_COMMITS,
  A_ADD_ALL_CONTENTS,
  GITHUB_G_GET_ALL_CONTENTS,
  GITHUB_A_ADD_ALL_CONTENTS,
  GITHUB_A_INIT_REPOS,
  GITHUB_CACHE_FILENAME,
} from '~/store/github/constants'

import {
  createRepoId,
  getRepoInfo,
  getBranches,
  getUniqueChildCommitsAcrossBranches,
} from '~/store/github/octokit'

// import { FAIRTRACKS_GITHUB_REPOS } from '~/store/github/fairtracksRepos'

export default {
  [A_INIT_REPOS]: async ({ commit, dispatch }, payload) => {
    commit(M_REGISTER_REPOS, payload.repos)
    await dispatch(A_GATHER_REPO_INFO, payload.octokit)
    await dispatch(A_GATHER_BRANCHES, payload.octokit)
    await dispatch(A_GATHER_CHILD_COMMITS, payload.octokit)
  },

  [A_GATHER_REPO_INFO]: async ({ getters, commit }, octokit) => {
    for (const repo of getters[G_GET_ALL_REPOS]) {
      const repoId = createRepoId(repo.owner, repo.name, repo.branch)
      console.log(`Gathering metadata for GitHub repo ${repoId}...`)
      const repoInfo = await getRepoInfo(octokit, repoId)
      commit(M_ADD_REPO_INFO, {
        repoId,
        repoInfo,
      })
    }
  },

  [A_GATHER_BRANCHES]: async ({ getters, commit }, octokit) => {
    for (const repo of getters[G_GET_ALL_REPOS]) {
      const repoId = createRepoId(repo.owner, repo.name, repo.branch)
      console.log(`Gathering branch metadata for GitHub repo ${repoId}...`)
      commit(M_ADD_BRANCHES, {
        repoId,
        branches: await getBranches(octokit, repoId),
      })
    }
  },

  [A_GATHER_CHILD_COMMITS]: async ({ getters, commit }, octokit) => {
    for (const repo of getters[G_GET_ALL_REPOS]) {
      const repoId = createRepoId(repo.owner, repo.name, repo.branch)
      console.log(`Gathering child commits for GitHub repo ${repoId}...`)
      commit(M_ADD_CHILD_COMMITS, {
        repoId,
        childCommits: await getUniqueChildCommitsAcrossBranches(
          octokit,
          repoId,
          repo.parentCommit,
          getters[G_GET_REPO_BRANCH_NAMES](repo)
        ),
      })
    }
  },

  [A_ADD_ALL_CONTENTS]: ({ commit }, allContents) => {
    const repos = Object.values(allContents.repos)

    commit(M_REGISTER_REPOS, repos)

    for (const repo of repos) {
      const repoId = createRepoId(repo.owner, repo.name, repo.branch)
      console.log(`Adding contents for GitHub repo ${repoId}...`)
      commit(M_ADD_REPO_INFO, {
        repoId,
        repoInfo: allContents.repoInfo[repoId],
      })
      commit(M_ADD_BRANCHES, {
        repoId,
        branches: allContents.branches[repoId],
      })
      commit(M_ADD_CHILD_COMMITS, {
        repoId,
        childCommits: allContents.childCommits[repoId],
      })
    }
  },

  async nuxtServerInit(store, { app, $loadMarkdownFiles, $content }) {
    try {
      store.dispatch(
        GITHUB_A_ADD_ALL_CONTENTS,
        JSON.parse(require('fs').readFileSync(GITHUB_CACHE_FILENAME))
      )
    } catch (err) {
      console.log(`Error reading GitHub repo metadata file: ${err.message}.`)
      console.log('Gathering metadata content using GitHub REST API...')

      const loadedCodeFiles = await $loadMarkdownFiles('pages/code', $content, { deep: true })
      const allCodeRepoMdFiles = loadedCodeFiles.markdownFiles

      await store.dispatch(GITHUB_A_INIT_REPOS, {
        repos: allCodeRepoMdFiles,
        octokit: app.$octokit,
      })

      console.log(`Writing GitHub repo metadata file: ${GITHUB_CACHE_FILENAME}.`)
      try {
        require('fs').writeFileSync(
          GITHUB_CACHE_FILENAME,
          JSON.stringify(store.getters[GITHUB_G_GET_ALL_CONTENTS], null, 2)
        )
      } catch (err) {
        console.log(err)
      }
    }
  },
}
