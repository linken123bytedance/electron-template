import { build_main } from "./utils/build_main";
import { build_preload } from "./utils/build_preload";
import { startup_electron } from "./utils/startup_electron";
import { dev_renderer } from "./utils/dev_renderer";

void main();

async function main() {
  await build_main();
  await build_preload();
  const url = await dev_renderer();
  await startup_electron(url);
}
