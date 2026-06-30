/**
 * components/Page.js
 * Menyusun semua komponen kepada satu paparan penuh dan menyuntiknya ke #top.
 */
import { Hero } from "./Hero.js";
import { Intro } from "./Intro.js";
import { PillarSection } from "./PillarSection.js";
import { Empower } from "./Empower.js";

export function renderPage(data) {
  const main = document.querySelector("#top");
  if (!main) return;

  main.innerHTML = [
    Hero(data.site, data.counterConfig),
    Intro(data.intro),
    ...data.pillars.map(PillarSection),
    Empower(data.empower),
  ].join("");
}
