import typescript from "@rollup/plugin-typescript";
import nodeExternals from "rollup-plugin-node-externals";

export default {
  input: "./src/main.ts",
  output: {
    dir: "./dist",
    format: "esm",
    sourcemap: true,
  },
  external: ["electron"],
  plugins: [typescript({}), nodeExternals({})],
};
