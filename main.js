/**
 * main.js
 * Titik masuk (entry point) aplikasi.
 * Tugas: import data + komponen, render halaman, dan aktifkan semua kelakuan UI.
 */
import { SITE, PILLARS, EMPOWER, INTRO, COUNTER_CONFIG } from "./data/content.js";
import { renderPage } from "./components/Page.js";
import {
  initProgressBar,
  initHeaderState,
  initActiveSectionTracking,
  initScrollReveal,
  initSmoothAnchors,
} from "./utils/scrollEffects.js";
import { initImpactCounter } from "./utils/impactCounter.js";
import { initMobileMenu } from "./utils/menu.js";

function bootstrap() {
  renderPage({
    site: SITE,
    pillars: PILLARS,
    empower: EMPOWER,
    intro: INTRO,
    counterConfig: COUNTER_CONFIG,
  });

  initProgressBar();
  initHeaderState();
  initActiveSectionTracking();
  initScrollReveal();
  initImpactCounter();
  initMobileMenu();
  initSmoothAnchors();
}

document.addEventListener("DOMContentLoaded", bootstrap);
