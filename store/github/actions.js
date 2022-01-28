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

import { FAIRTRACKS_GITHUB_REPOS } from '~/store/github/fairtracksRepos'

export default {
  [A_INIT_REPOS]: async ({ commit, dispatch }, payload) => {
    commit(M_REGISTER_REPOS, payload.repos)
    await dispatch(A_GATHER_REPO_INFO, payload.octokit)
    await dispatch(A_GATHER_BRANCHES, payload.octokit)
    await dispatch(A_GATHER_CHILD_COMMITS, payload.octokit)
  },

  [A_GATHER_REPO_INFO]: async ({ getters, commit }, octokit) => {
    for (const repo of getters[G_GET_ALL_REPOS]) {
      console.log(
        `Gathering metadata for GitHub repo ${createRepoId(
          repo.owner,
          repo.name
        )}...`
      )
      const repoInfo = await getRepoInfo(octokit, repo.owner, repo.name)
      commit(M_ADD_REPO_INFO, {
        owner: repo.owner,
        name: repo.name,
        repoInfo,
      })
    }
  },

  [A_GATHER_BRANCHES]: async ({ getters, commit }, octokit) => {
    for (const repo of getters[G_GET_ALL_REPOS]) {
      console.log(
        `Gathering branch metadata for GitHub repo ${createRepoId(
          repo.owner,
          repo.name
        )}...`
      )
      commit(M_ADD_BRANCHES, {
        owner: repo.owner,
        name: repo.name,
        branches: await getBranches(octokit, repo.owner, repo.name),
      })
    }
  },

  [A_GATHER_CHILD_COMMITS]: async ({ getters, commit }, octokit) => {
    for (const repo of getters[G_GET_ALL_REPOS]) {
      console.log(
        `Gathering child commits for GitHub repo ${createRepoId(
          repo.owner,
          repo.name
        )}...`
      )
      commit(M_ADD_CHILD_COMMITS, {
        owner: repo.owner,
        name: repo.name,
        childCommits: await getUniqueChildCommitsAcrossBranches(
          octokit,
          repo.owner,
          repo.name,
          repo.parentCommit,
          getters[G_GET_REPO_BRANCH_NAMES]({
            owner: repo.owner,
            name: repo.name,
          })
        ),
      })
    }
  },

  [A_ADD_ALL_CONTENTS]: ({ commit }, allContents) => {
    const repos = Object.values(allContents.repos)

    commit(M_REGISTER_REPOS, repos)

    for (const repo of repos) {
      const repoId = createRepoId(repo.owner, repo.name)
      console.log(`Adding contents for GitHub repo ${repoId}...`)
      commit(M_ADD_REPO_INFO, {
        owner: repo.owner,
        name: repo.name,
        repoInfo: allContents.repoInfo[repoId],
      })
      commit(M_ADD_BRANCHES, {
        owner: repo.owner,
        name: repo.name,
        branches: allContents.branches[repoId],
      })
      commit(M_ADD_CHILD_COMMITS, {
        owner: repo.owner,
        name: repo.name,
        childCommits: allContents.childCommits[repoId],
      })
    }
  },

  async nuxtServerInit(store, { app }) {
    try {
      store.dispatch(
        GITHUB_A_ADD_ALL_CONTENTS,
        JSON.parse(require('fs').readFileSync(GITHUB_CACHE_FILENAME))
      )
    } catch (err) {
      console.log(`Error reading GitHub repo metadata file: ${err.message}.`)
      console.log('Gathering metadata content using GitHub REST API...')

      await store.dispatch(GITHUB_A_INIT_REPOS, {
        repos: FAIRTRACKS_GITHUB_REPOS,
        octokit: app.$octokit,
      })

      console.log(
        `Writing GitHub repo metadata file: ${GITHUB_CACHE_FILENAME}.`
      )
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
