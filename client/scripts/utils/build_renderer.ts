import path from "node:path";
import { rootPath } from "./index";
import type { ExecFileSyncOptions } from "child_process";
import child_process from "node:child_process";
import fs from "node:fs";

export async function build_renderer() {
  const processOptions: any = {
    cwd: path.resolve(rootPath, "../view"),
    stdio: "inherit",
  } as ExecFileSyncOptions;
  const dist = path.resolve(rootPath, "./dist/view");
  child_process.execSync(
    `npx cross-env VITE_BUILD_BASE="${dist.replaceAll("\\", "/")}" pnpm run build`,
    processOptions,
  );
  await fs.promises.cp(path.resolve(rootPath, "../view/dist"), dist, {
    recursive: true,
  });
}
