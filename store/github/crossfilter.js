import _ from 'lodash'

function _committerDimensionAccessor(v) {
  return [
    v.commit.committer.name,
    _.get(v, 'committer.id', null),
    _.get(v, 'committer.login', null),
  ]
}

function _commitDateDimensionAccessor(v) {
  return [v.commit.committer.date]
}

function _reduceCountAddCalcLastDate(p, v, _nf) {
  p.date = Math.max.apply(null, [p.date, new Date(v.commit.committer.date)])
  p.count += 1
  return p
}

function _reduceCountRemove(p, _v, _nf) {
  p.count -= 1
  return p
}

function _reduceInitial() {
  return { date: null, count: 0 }
}

function _orderByCount(p) {
  return p.count
}

function _orderByDate(p) {
  return p.date
}

export function groupCommitsByDate(childCommits) {
  return childCommits
    .dimension(_commitDateDimensionAccessor)
    .group()
    .reduce(_reduceCountAddCalcLastDate, _reduceCountRemove, _reduceInitial)
    .order(_orderByDate)
    .all()
}

export function groupCommitsByCommitterAndCalcLastDate(childCommits) {
  return childCommits
    .dimension(_committerDimensionAccessor)
    .group()
    .reduce(_reduceCountAddCalcLastDate, _reduceCountRemove, _reduceInitial)
    .order(_orderByCount)
}
