require('dotenv-flow').config()

const pkg = require('../../package.json')

const [user, repo] = pkg.name.substr(1).split('/')

module.exports = {
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  title: pkg.title,
  description: pkg.description,
  themeConfig: {
    repo: `https://github.com/${user}/${repo}`,
    docsDir: 'docs',
    lastUpdated: true,
    nav: [
      {
        text: 'Release Notes',
        link: `https://github.com/${user}/${repo}/blob/master/CHANGELOG.md`
      },
    ],
    sidebar: [
      '/installation.md',
      '/getting-started.md',
      '/components.md',
      '/example.md',
    ]
  },
  host: process.env.DOCS_HOST,
  port: process.env.DOCS_PORT
}
