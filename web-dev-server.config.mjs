
import { fromRollup } from "@web/dev-server-rollup";
import rollupCommonjs from "@rollup/plugin-commonjs";

const commonjs = fromRollup(rollupCommonjs);

export default {
  appIndex: "./index.html",
  open: true,
  nodeResolve: true,
  http2: false,
  plugins: [commonjs()],
  rootDir: ".",
  debug:true,
};
