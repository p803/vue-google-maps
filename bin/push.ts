import { execSync } from 'child_process'
import pkg from '../package.json'

execSync(`git tag v${pkg.version}`)
execSync('git push')
execSync('git push --tags')
