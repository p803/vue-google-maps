#!/bin/bash
set -e

version=`cat package.json | jq .version`
version=`echo ${version:1:-1}`

git tag "v$version"
git push --tags
