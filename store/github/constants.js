export const NAMESPACE = 'github/'

export const G_GET_ALL_REPOS = 'getAllRepos'
export const G_GET_REPO_URL = 'getRepoUrl'
export const G_GET_REPO_OPEN_ISSUES = 'getRepoOpenIssues'
export const G_GET_REPO_LANGUAGE = 'getRepoLanguage'
export const G_GET_REPO_TIME_OF_CREATION = 'getRepoTimeOfCreation'
export const G_GET_REPO_TIME_OF_LAST_UPDATE = 'getRepoTimeOfLastUpdate'
export const G_GET_REPO_CHILD_COMMIT_COUNT = 'getRepoChildCommitCount'
export const G_GET_REPO_BRANCH_NAMES = 'getBranchNames'
export const G_GET_ALL_CONTENTS = 'getAllContents'
export const M_REGISTER_REPOS = 'registerRepos'
export const M_ADD_REPO_INFO = 'addRepoInfo'
export const M_ADD_BRANCHES = 'addBranches'
export const M_ADD_CHILD_COMMITS = 'addChildCommits'
export const A_INIT_REPOS = 'initRepos'
export const A_GATHER_REPO_INFO = 'gatherRepoInfo'
export const A_GATHER_BRANCHES = 'gatherBranches'
export const A_GATHER_CHILD_COMMITS = 'gatherChildCommits'
export const A_ADD_ALL_CONTENTS = 'addAllContents'

export const GITHUB_G_GET_ALL_REPOS = NAMESPACE + G_GET_ALL_REPOS
export const GITHUB_G_GET_REPO_URL = NAMESPACE + G_GET_REPO_URL
export const GITHUB_G_GET_REPO_OPEN_ISSUES = NAMESPACE + G_GET_REPO_OPEN_ISSUES
export const GITHUB_G_GET_REPO_LANGUAGE = NAMESPACE + G_GET_REPO_LANGUAGE
export const GITHUB_G_GET_REPO_TIME_OF_CREATION =
  NAMESPACE + G_GET_REPO_TIME_OF_CREATION
export const GITHUB_G_GET_REPO_TIME_OF_LAST_UPDATE =
  NAMESPACE + G_GET_REPO_TIME_OF_LAST_UPDATE
export const GITHUB_G_GET_REPO_CHILD_COMMIT_COUNT =
  NAMESPACE + G_GET_REPO_CHILD_COMMIT_COUNT
export const GITHUB_G_GET_REPO_BRANCH_NAMES =
  NAMESPACE + G_GET_REPO_BRANCH_NAMES
export const GITHUB_G_GET_ALL_CONTENTS = NAMESPACE + G_GET_ALL_CONTENTS
export const GITHUB_A_INIT_REPOS = NAMESPACE + A_INIT_REPOS
export const GITHUB_A_ADD_ALL_CONTENTS = NAMESPACE + A_ADD_ALL_CONTENTS

export const GITHUB_CACHE_FILENAME = '.githubRepoInfo.json'
