# `dd-trace/esbuild` + TS

Example project to demostrate import resolution bug in `dd-trace/esbuild` when
integrating into a Typescript project

_link to the issue_

```sh
npm i
npm run build
```

Expecting no warnings, but getting

```
MISSING: Unable to find "js-module". Is the package dead code?
MISSING: Unable to find "ts-module". Is the package dead code?
MISSING: Unable to find "./ts-module". Is the package dead code?
MISSING: Unable to find "./ts-inner". Is the package dead code?
```
