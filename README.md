build/run local:

npm start

publish:

npm run build

git add dist/\* --force

git commit -m "deploy whatever"

git subtree push --prefix dist origin gh-pages
