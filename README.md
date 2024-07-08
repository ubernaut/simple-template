build/run local:

npm start

publish:

npm run build-gh-pages

git add dist

git commit -m "deploy whatever"

git subtree push --prefix dist origin gh-pages
