import typescript from "@rollup/plugin-typescript";
import nodeExternals from "rollup-plugin-node-externals";

// const production = !process.env.ROLLUP_WATCH;

export default {
  input: "./src/main.ts",
  output: {
    dir: "./dist",
    format: "esm",
    sourcemap: false,
  },
  external: ["electron"],
  plugins: [
    typescript({}), // ts
    nodeExternals({}),
  ],
};
