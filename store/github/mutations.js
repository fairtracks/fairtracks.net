import {
  M_CLEAR_STATE,
  M_REGISTER_REPOS,
  M_ADD_REPO_INFO,
  M_ADD_BRANCHES,
  M_ADD_CHILD_COMMITS,
} from '~/store/github/constants'

import { createRepoId, pruneGithubMetadata } from '~/store/github/octokit'

export default {
  [M_CLEAR_STATE]: (state) => {
    state.repos = {}
    state.branches = {}
    state.repoInfo = {}
    state.childCommits = {}
  },

  [M_REGISTER_REPOS]: (state, repos) => {
    for (const repo of repos) {
      for (const field of ['title', 'owner', 'name']) {
        if (repo[field] === '' || repo[field] === null || repo[field] === undefined) {
          console.log(`Repo field '${field}' is required, current value: '${repo[field]}'`)
        }
      }

      for (const [field, defaultVal] of Object.entries({
        branch: '',
        parentCommit: '',
        includeInDev: true,
      })) {
        if (repo[field] === '' || repo[field] === null || repo[field] === undefined) {
          repo[field] = defaultVal
        }
      }

      const repoId = createRepoId(repo.owner, repo.name, repo.branch)

      if (process.env.NODE_ENV === 'development' && repo.includeInDev === false) {
        console.error(
          `Skipping ${repoId} as repo is marked to not be included in development mode...`
        )
        continue
      }

      if (repoId in state.repos) {
        console.error(`Repo with id ${repoId} has already been registered`)
      } else {
        state.repos[repoId] = {
          title: repo.title,
          owner: repo.owner,
          name: repo.name,
          branch: repo.branch,
          parentCommit: repo.parentCommit,
          includeInDev: repo.includeInDev,
        }
      }
    }
  },

  [M_ADD_REPO_INFO]: (state, payload) => {
    if (payload.repoId in state.repoInfo) {
      console.error(`Repo info for repo with id ${payload.repoId} has already been added`)
    } else {
      state.repoInfo[payload.repoId] = pruneGithubMetadata(payload.repoInfo)
    }
  },

  [M_ADD_BRANCHES]: (state, payload) => {
    if (payload.repoId in state.branches) {
      console.error(`Branches for repo with id ${payload.repoId} has already been added`)
    } else {
      state.branches[payload.repoId] = pruneGithubMetadata(payload.branches)
    }
  },

  [M_ADD_CHILD_COMMITS]: (state, payload) => {
    if (payload.repoId in state.childCommits) {
      console.error(`Child commits for repo with id ${payload.repoId} have already been added`)
    } else {
      state.childCommits[payload.repoId] = pruneGithubMetadata(payload.childCommits)
    }
  },
}
