import path from "node:path";
import { rootPath } from "./index";
import type { ExecFileSyncOptions } from "child_process";
import child_process from "node:child_process";

export async function startup_electron(url?: string) {
  const processOptions: any = {
    cwd: path.resolve(rootPath, "."),
    stdio: "inherit",
  } as ExecFileSyncOptions;

  let cmd = `electron .`;
  if (url) {
    cmd = `${cmd} --url=${url}`;
  }
  child_process.execSync(cmd, processOptions);
}
