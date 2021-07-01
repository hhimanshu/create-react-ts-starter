#!/bin/bash

echo "Making sure all dependencies are met"

if ! command -v yarn &> /dev/null; then
  echo "Yarn is not installed"
  echo "See yarn install docs: https://yarnpkg.com/getting-started/install"
  exit 1
fi

echo "Installing dependencies ..."
yarn

echo "Setting up git hooks ..."
yarn husky install


echo "Done, run \"yarn start\" and start developing"
exit 0