#!/bin/bash

npm run build;
git add dist/* --force;
git commit -m "deploying to gh-pages";
git subtree push --prefix dist origin gh-pages;
