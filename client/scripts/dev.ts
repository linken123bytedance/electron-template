import { RollupWatcherEvent, watch } from "rollup";
import typescript from "@rollup/plugin-typescript";
import nodeExternals from "rollup-plugin-node-externals";

const watcher = watch({
  input: "./src/main.ts",
  watch: {},
  output: [
    {
      dir: "./dist",
      format: "esm",
      sourcemap: false,
    },
  ],
  external: ["electron"],
  plugins: [
    typescript({}), // ts
    nodeExternals({}),
  ],
});

// This will make sure that bundles are properly closed after each run
watcher.on("event", async (event: RollupWatcherEvent) => {
  if (event.code === "START") {
    // console.log(`[dev] started`);
  } else if (event.code === "BUNDLE_START") {
    console.log(`[dev] compiling: ${event.input}`);
  } else if (event.code === "BUNDLE_END") {
    console.log(`[dev] completed`);
    await event.result.close();
  } else if (event.code === "END") {
    // await watcher.invalidate();
    // await build();
  } else if (event.code === "ERROR") {
    console.error(event.error);
  }
});

// Additionally, you can hook into the following. Again, return a Promise to
// make Rollup wait at that stage:
watcher.on("change", (id, { event }) => {
  /* a file was modified */
});
watcher.on("restart", () => {
  /* a new run was triggered */
});
watcher.on("close", () => {
  /* the watcher was closed, see below */
});
