#!/usr/bin/env node

import ddPlugin from "dd-trace/esbuild.js";
import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/index.ts"],
  outdir: "build",
  outExtension: { ".js": ".mjs" },
  platform: "node",
  target: "node18",
  format: "esm",
  bundle: true,
  plugins: [ddPlugin],
  external: [
    // https://github.com/DataDog/dd-trace-js/issues/2413
    "graphql/language/visitor", // optional dependency of `dd-trace`
    "graphql/language/printer", // optional dependency of `dd-trace`
    "graphql/utilities", // optional dependency of `dd-trace`
  ],
});
