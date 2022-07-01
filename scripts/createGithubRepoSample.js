const fs = require('fs')
const _ = require('lodash')
require('deepdash')(_)

const constants = require('../store/github/constants.js')

const contents = JSON.parse(fs.readFileSync(constants.GITHUB_CACHE_FILENAME))

contents.childCommits = _.eachDeep(contents.childCommits, (_value, key, parent, _context) => {
  if (key === 'commit') {
    const person = _.sample([
      {
        name: 'John Doe',
        email: 'john.doe@nowhere.com',
        login: 'johndoe246',
        html_url: 'https://github.com/johndoe246',
        id: 9876543210,
      },
      {
        name: 'Jane Doe',
        email: 'jane.doe@nowhere.com',
        login: 'janedoe246',
        html_url: 'https://github.com/janedoe246',
        id: 9876543211,
      },
    ])

    parent.commit.committer.name = person.name
    parent.commit.committer.email = person.email

    if (parent.committer) {
      parent.committer.login = person.login
      parent.committer.html_url = person.html_url
      parent.committer.id = person.id
    }
    console.assert(!parent.author)
  }
  return true
})

fs.writeFileSync(constants.SAMPLE_GITHUB_CACHE_FILENAME, JSON.stringify(contents, null, 2))
