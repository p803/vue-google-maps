import { execSync } from 'child_process'
import { version } from '../package.json'

execSync(`git tag v${version}`)
execSync('git push')
execSync('git push --tags')
