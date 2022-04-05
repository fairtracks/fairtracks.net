import _ from 'lodash'
import crossfilter from 'crossfilter2'

import {
  G_GET_ALL_REPOS,
  G_GET_REPO_URL,
  G_GET_REPO_OPEN_ISSUES,
  G_GET_REPO_LANGUAGE,
  G_GET_REPO_BRANCH_NAMES,
  G_GET_REPO_COMMIT_COUNT,
  G_GET_REPO_COMMITS_CROSSFILTER,
  G_GET_REPO_TOP_COMMITTERS,
  G_GET_ALL_CONTENTS,
  G_GET_REPO_FIRST_COMMIT_DATE,
  G_GET_REPO_LAST_COMMIT_DATE,
} from '~/store/github/constants'

import { createRepoId } from '~/store/github/octokit'
import {
  groupCommitsByCommitterAndCalcLastDate,
  groupCommitsByDate,
} from '~/store/github/crossfilter'

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
    return _extractRepoValFromState(state, repo, 'repoInfo', ['data', 'html_url'])
  },

  [G_GET_REPO_OPEN_ISSUES]: (state) => (repo) => {
    return _extractRepoValFromState(state, repo, 'repoInfo', ['data', 'open_issues'])
  },

  [G_GET_REPO_LANGUAGE]: (state) => (repo) => {
    return _extractRepoValFromState(state, repo, 'repoInfo', ['data', 'language'])
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

  [G_GET_REPO_COMMITS_CROSSFILTER]: (state) => (repo) => {
    return crossfilter(_extractRepoValFromState(state, repo, 'childCommits', []))
  },

  [G_GET_REPO_FIRST_COMMIT_DATE]: (_state, getters) => (repo) => {
    return groupCommitsByDate(getters[G_GET_REPO_COMMITS_CROSSFILTER](repo))[0].value.date
  },

  [G_GET_REPO_LAST_COMMIT_DATE]: (_state, getters) => (repo) => {
    const results = groupCommitsByDate(getters[G_GET_REPO_COMMITS_CROSSFILTER](repo))
    return results[results.length - 1].value.date
  },

  [G_GET_REPO_TOP_COMMITTERS]: (_state, getters) => (repo) => {
    const NUM_COMMITTERS = 3

    return groupCommitsByCommitterAndCalcLastDate(
      getters[G_GET_REPO_COMMITS_CROSSFILTER](repo)
    ).top(NUM_COMMITTERS)
  },

  [G_GET_REPO_COMMIT_COUNT]: (state) => (repo) => {
    return _extractRepoValFromState(state, repo, 'childCommits', []).length
  },
}
