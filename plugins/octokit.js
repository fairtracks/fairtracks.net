const { Octokit } = require('@octokit/core')
const { config } = require('@probot/octokit-plugin-config')
const { restEndpointMethods } = require('@octokit/plugin-rest-endpoint-methods')
const { retry } = require('@octokit/plugin-retry')
const { throttling } = require('@octokit/plugin-throttling')
const { paginateRest } = require('@octokit/plugin-paginate-rest')

const MyOctokit = Octokit.plugin(config, restEndpointMethods, retry, throttling, paginateRest)

export default ({ app }, inject) => {
  const octokit = new MyOctokit({
    auth: app.$config.githubAuthToken,
    throttle: {
      onRateLimit: (retryAfter, options, octokit) => {
        octokit.log.warn(`Request quota exhausted for request ${options.method} ${options.url}`)

        if (options.request.retryCount === 0) {
          // only retries once
          octokit.log.info(`Retrying after ${retryAfter} seconds!`)
          return true
        }
      },
      onAbuseLimit: (_retryAfter, options, octokit) => {
        // does not retry, only logs a warning
        octokit.log.warn(`Abuse detected for request ${options.method} ${options.url}`)
      },
    },
  })

  inject('octokit', octokit)
}
