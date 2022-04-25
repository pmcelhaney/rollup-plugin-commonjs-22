```sh
npm install
npm start
```

It should open a browser pointing to a page that reads "The import passed."

This minimal test case is working. Something about my real app (which as TypeScript, ESBuild, a monorepo, etc.) doesn't like the latest version of @rollup/plugin-commonjs and @web/dev-server-rollup.
