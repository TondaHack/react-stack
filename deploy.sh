#!/bin/bash
set -e # exit with nonzero exit code if anything fails

yarn && yarn build && yarn test

echo $TRAVIS_BRANCH

cd dist
git init
git config user.name "travis"
git config user.email "travis"
git add .
git commit -m "Deploy to master"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1