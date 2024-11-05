import { build_main } from "./utils/build_main";
import { build_preload } from "./utils/build_preload";
import { startup_electron } from "./utils/startup_electron";
import { build_renderer } from "./utils/build_renderer";

void main();

async function main() {
  await build_main();
  await build_preload();
  await build_renderer();
  await startup_electron();
}
