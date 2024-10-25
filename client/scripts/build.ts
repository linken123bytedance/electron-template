import child_process from "node:child_process";
import url from "node:url";
import path from "node:path";
import type { ExecFileSyncOptions } from "child_process";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

void main();

async function main() {
  const processOptions: any = {
    cwd: path.resolve(__dirname, ".."),
    stdio: "inherit",
  } as ExecFileSyncOptions;

  child_process.execSync(
    `rollup --config rollup.config.ts --configPlugin typescript`,
    processOptions,
  );

  child_process.execSync(`electron .`, processOptions);
}
