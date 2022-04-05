export function createRepoId(owner, name) {
  return `${owner}/${name}`
}
/**
 * Recursively walks through all leaf nodes of the Github metadata object and prunes all
 * nodes that do not comply with the specified hardcoded rules.
 * @param {Object} obj - Nested GitHub metadata object returned from octokit
 * @returns {*}
 * @private
 */
export function pruneGithubMetadata(obj) {
  const _ = require('lodash')
  const filterDeep = require('deepdash/getFilterDeep')(_)

  return filterDeep(
    obj,
    function (_value, key, _parent, context) {
      return (
        !(key.endsWith('url') && key !== 'html_url') &&
        key !== 'node_id' &&
        context.parent.key !== 'tree' &&
        context.parent.key !== 'verification' &&
        context.parent.key !== 'author'
      )
    },
    {
      tree: true,
      onTrue: { skipChildren: true },
    }
  )
}

export async function getRepoInfo(octokit, owner, name) {
  return await octokit.request('GET /repos/{owner}/{name}', {
    owner,
    name,
    type: 'public',
  })
}

export async function getBranches(octokit, owner, name) {
  return await octokit.paginate('GET /repos/{owner}/{name}/branches', {
    owner,
    name,
    per_page: 100,
  })
}

/**
 * Loops through all supplied branches of GitHub repository and collects all commits that are
 * descendants of the supplied parentCommit. Each commit is only collected once. If parentCommit
 * is empty, the first commit of the first branch is considered the parentCommit.
 * @param {string} octokit - Initialized octokit instance, preferably with auth token
 * @param {string} owner - GitHub repository owner (i.e. user or organization)
 * @param {string} name - GitHub repository name
 * @param {string} parentCommit - Commit SHA of parent commit
 * @param {Array} branchNames - Array of branch names
 * @returns {Promise<*[]>} - All collected child commits
 * @private
 */
export async function getUniqueChildCommitsAcrossBranches(
  octokit,
  owner,
  name,
  parentCommit,
  branchNames
) {
  // console.log(`Repo: ${_createRepoId(owner, name)}`)

  const allCommits = []
  const commitShas = new Set()

  function _addCommit(commit) {
    // console.log(`Checking commit ${commit.sha} for addition...`)
    if (!commitShas.has(commit.sha)) {
      // console.log(`Adding commit ${commit.sha}...`)
      commitShas.add(commit.sha)
      allCommits.push(commit)
    }
  }

  for (const branchName of branchNames) {
    console.log(`Branch name: ${branchName}`)
    const branchCommitStack = []
    await octokit.paginate(
      'GET /repos/{owner}/{name}/commits',
      {
        owner,
        name,
        sha: branchName,
        per_page: 100,
      },
      (response, done) => {
        // console.log(response)
        for (const commit of Object.values(response.data)) {
          branchCommitStack.push(commit)
          if (commit.sha === parentCommit) {
            // console.log(
            //   `Stopping commit log of branch ${branchName} at parentCommit: ${parentCommit}`
            // )
            done()
            break
          }
        }
      }
    )
    while (branchCommitStack.length > 0) {
      const lastCommit = branchCommitStack.pop()
      if (commitShas.size > 0) {
        for (const parent of lastCommit.parents) {
          if (commitShas.has(parent.sha)) {
            _addCommit(lastCommit)
            break
          }
        }
      } else if (parentCommit === '' || lastCommit.sha === parentCommit) {
        _addCommit(lastCommit)
      }
    }
  }
  console.log(`Added ${allCommits.length} child commits for repo ${createRepoId(owner, name)}`)
  return allCommits
}
