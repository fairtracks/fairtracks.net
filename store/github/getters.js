import _ from 'lodash'
import {
  G_GET_ALL_REPOS,
  G_GET_REPO_URL,
  G_GET_REPO_OPEN_ISSUES,
  G_GET_REPO_LANGUAGE,
  G_GET_REPO_TIME_OF_CREATION,
  G_GET_REPO_TIME_OF_LAST_UPDATE,
  G_GET_REPO_BRANCH_NAMES,
  G_GET_REPO_CHILD_COMMIT_COUNT,
  G_GET_ALL_CONTENTS,
} from '~/store/github/constants'

import { createRepoId } from '~/store/github/octokit'

function _extractRepoValFromState(state, repo, topLevel, path) {
  const repoId = createRepoId(repo.owner, repo.name)
  return _.get(state, [topLevel, repoId].concat(path), null)
}

export default {
  [G_GET_ALL_REPOS]: (state) => {
    return Object.values(state.repos)
  },

  [G_GET_ALL_CONTENTS]: (state) => {
    return state
  },

  [G_GET_REPO_URL]: (state) => (repo) => {
    return _extractRepoValFromState(state, repo, 'repoInfo', [
      'data',
      'html_url',
    ])
  },

  [G_GET_REPO_OPEN_ISSUES]: (state) => (repo) => {
    return _extractRepoValFromState(state, repo, 'repoInfo', [
      'data',
      'open_issues',
    ])
  },

  [G_GET_REPO_LANGUAGE]: (state) => (repo) => {
    return _extractRepoValFromState(state, repo, 'repoInfo', [
      'data',
      'language',
    ])
  },

  [G_GET_REPO_TIME_OF_CREATION]: (state) => (repo) => {
    return _extractRepoValFromState(state, repo, 'repoInfo', [
      'data',
      'created_at',
    ])
  },

  [G_GET_REPO_TIME_OF_LAST_UPDATE]: (state) => (repo) => {
    return _extractRepoValFromState(state, repo, 'repoInfo', [
      'data',
      'updated_at',
    ])
  },

  [G_GET_REPO_BRANCH_NAMES]: (state) => (repo) => {
    const branches = _extractRepoValFromState(state, repo, 'branches', [])
    if (branches !== null) {
      return _.transform(branches, (result, val) => {
        result.push(val.name)
      })
    } else {
      return null
    }
  },

  [G_GET_REPO_CHILD_COMMIT_COUNT]: (state) => (repo) => {
    return _extractRepoValFromState(state, repo, 'childCommits', []).length
  },
}
