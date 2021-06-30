import { execSync } from 'child_process'
import { resolve } from 'path'

const options = { cwd: resolve(__dirname, '..', 'docs', '.vuepress', 'dist') }
execSync('rm --force --recursive .git', options)
execSync('git init', options)
execSync('git config user.name p803', options)
execSync('git config user.email luk.proksa@gmail.com', options)
execSync('git add --all', options)
execSync('git commit --message "Publish docs"', options)
execSync('git push --force git@github.com:p803/vue-google-maps.git master:gh-pages', options)
