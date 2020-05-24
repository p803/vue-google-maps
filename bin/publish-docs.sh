#!/bin/bash
set -e

cd docs/.vuepress/dist/

git init

git config user.name Wall-E
git config user.email no-reply@example.com

git add -A
git commit -m"Updating docs"

git push -f git@github.com:p803/vue-google-maps.git master:gh-pages

cd -
