import {
  M_REGISTER_REPOS,
  M_ADD_REPO_INFO,
  M_ADD_BRANCHES,
  M_ADD_CHILD_COMMITS,
} from '~/store/github/constants'

import { createRepoId, pruneGithubMetadata } from '~/store/github/octokit'

export default {
  [M_REGISTER_REPOS]: (state, repos) => {
    for (const repo of repos) {
      const repoId = createRepoId(repo.owner, repo.name)
      if (repoId in state.repos) {
        console.error(`Repo with id ${repoId} has already been registered`)
      } else {
        state.repos[repoId] = {
          title: repo.title,
          owner: repo.owner,
          name: repo.name,
          parentCommit: repo.parentCommit,
        }
      }
    }
  },

  [M_ADD_REPO_INFO]: (state, payload) => {
    const repoId = createRepoId(payload.owner, payload.name)
    if (repoId in state.repoInfo) {
      console.error(
        `Repo info for repo with id ${repoId} has already been added`
      )
    } else {
      state.repoInfo[repoId] = pruneGithubMetadata(payload.repoInfo)
    }
  },

  [M_ADD_BRANCHES]: (state, payload) => {
    const repoId = createRepoId(payload.owner, payload.name)
    if (repoId in state.branches) {
      console.error(
        `Branches for repo with id ${repoId} has already been added`
      )
    } else {
      state.branches[repoId] = pruneGithubMetadata(payload.branches)
    }
  },

  [M_ADD_CHILD_COMMITS]: (state, payload) => {
    const repoId = createRepoId(payload.owner, payload.name)
    if (repoId in state.childCommits) {
      console.error(
        `Child commits for repo with id ${repoId} have already been added`
      )
    } else {
      state.childCommits[repoId] = pruneGithubMetadata(payload.childCommits)
    }
  },
}
