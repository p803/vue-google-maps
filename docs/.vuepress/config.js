require('dotenv-flow').config()
const pkg = require('../../package.json')

const [user, repo] = pkg.name.substr(1).split('/')

module.exports = {
    base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
    title: pkg.title,
    description: pkg.description,
    themeConfig: {
        nav: [
            { text: 'Release Notes', link: `https://github.com/${user}/${repo}/blob/master/CHANGELOG.md` },
            { text: 'GitHub', link: `https://github.com/${user}/${repo}` }
        ],
        sidebar: [
            '/installation.md',
            '/getting-started.md',
            '/components.md',
            '/examples.md',
        ]
    },
    host: process.env.VUE_HOST,
    port: process.env.VUE_PORT,
}
