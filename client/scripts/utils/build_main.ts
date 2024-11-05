import path from "node:path";
import { rootPath } from "./index";
import { OutputOptions, rollup, RollupOptions } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export async function build_main() {
  const tsconfig = path.resolve(rootPath, "./src/tsconfig.json");
  const options: RollupOptions = {
    input: path.resolve(rootPath, "./src/main.ts"),
    output: [
      {
        dir: "./dist",
        format: "esm",
        sourcemap: false,
      },
    ],
    external: ["electron"],
    plugins: [
      nodeResolve({
        extensions: [".js", ".ts"],
      }),
      commonjs(),
      typescript({ tsconfig }),
    ],
  };

  const rollupBuild = await rollup(options);
  for (const outputOptions of options.output as OutputOptions[]) {
    await rollupBuild.write(outputOptions);
  }
}
