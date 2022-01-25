import crossfilter from 'crossfilter2'

const { Octokit } = require('@octokit/core')
const { config } = require('@probot/octokit-plugin-config')
const { restEndpointMethods } = require('@octokit/plugin-rest-endpoint-methods')
const { retry } = require('@octokit/plugin-retry')
const { throttling } = require('@octokit/plugin-throttling')
const { paginateRest } = require('@octokit/plugin-paginate-rest')

const MyOctokit = Octokit.plugin(
  config,
  restEndpointMethods,
  retry,
  throttling,
  paginateRest
)

async function _gatherAllChildCommits(octokit, owner, repo, parentCommit) {
  console.log(`${owner}/${repo}`)
  const branches = await octokit.paginate(
    'GET /repos/{owner}/{repo}/branches',
    {
      owner,
      repo,
      per_page: 100,
    }
  )
  // console.log(branches)
  const allCommits = crossfilter()
  const commitShas = new Set()

  function addCommit(commit) {
    // console.log(`Checking commit ${commit.sha} for addition...`)
    if (!commitShas.has(commit.sha)) {
      console.log(`Adding commit ${commit.sha}...`)
      commitShas.add(commit.sha)
      allCommits.add([commit])
    }
  }

  for (const branch of branches) {
    console.log(branch.name)
    const branchCommitStack = []
    await octokit.paginate(
      'GET /repos/{owner}/{repo}/commits',
      {
        owner,
        repo,
        sha: branch.name,
        per_page: 100,
      },
      (response, done) => {
        // console.log(response)
        for (const commit of Object.values(response.data)) {
          branchCommitStack.push(commit)
          if (commit.sha === parentCommit) {
            // console.log(
            //   `Stopping commit log of branch ${branch.name} at startCommit: ${repo.startCommit}`
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
            addCommit(lastCommit)
            break
          }
        }
      } else if (parentCommit === '' || lastCommit.sha === parentCommit) {
        addCommit(lastCommit)
      }
    }
  }
  console.log(allCommits.size())
  // console.log(allCommits)
  return allCommits
}

export default ({ app }, inject) => {
  console.log(app.$config.githubAuthToken)
  const octokit = new MyOctokit({
    auth: app.$config.githubAuthToken,
    throttle: {
      onRateLimit: (retryAfter, options, octokit) => {
        octokit.log.warn(
          `Request quota exhausted for request ${options.method} ${options.url}`
        )

        if (options.request.retryCount === 0) {
          // only retries once
          octokit.log.info(`Retrying after ${retryAfter} seconds!`)
          return true
        }
      },
      onAbuseLimit: (_retryAfter, options, octokit) => {
        // does not retry, only logs a warning
        octokit.log.warn(
          `Abuse detected for request ${options.method} ${options.url}`
        )
      },
    },
  })
  inject('octokit', octokit)
  inject('gatherAllChildCommits', _gatherAllChildCommits)
}
