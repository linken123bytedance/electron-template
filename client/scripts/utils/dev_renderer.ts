import path from "node:path";
import { rootPath } from "./index";
import type { ExecFileSyncOptions } from "child_process";
import child_process from "node:child_process";
import * as process from "node:process";

export async function dev_renderer() {
  const processOptions: any = {
    cwd: path.resolve(rootPath, "../view"),
    stdio: "inherit",
  } as ExecFileSyncOptions;
  child_process.exec(`pnpm run dev`, processOptions);
  return `http://localhost:5137`;
}
