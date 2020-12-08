const { execSync } = require('child_process');

// Read package.
const pkg = require('../package.json');

// Publish code.
execSync(`git tag v${pkg.version}`);
execSync('git push');
execSync('git push --tags');

// Publish documentation.
const options = { cwd: 'doc/.vuepress/dist' };
execSync('git init', options);
execSync('git config user.name p803', options);
execSync('git config user.email luk.proksa@gmail.com', options);
execSync('git add --all', options);
execSync('git commit --message "Publish doc"', options);
execSync('git push --force git@github.com:p803/vue-google-maps.git master:gh-pages', options);
