/**
 * utils/menu.js
 * Kelakuan menu mudah alih (buka/tutup, kunci scroll badan).
 */
import { getState, setState } from "../state/store.js";

export function initMobileMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const next = !getState().menuOpen;
    setState({ menuOpen: next });
    nav.classList.toggle("is-open", next);
    toggle.setAttribute("aria-expanded", String(next));
    document.body.classList.toggle("no-scroll", next);
  });

  nav.querySelectorAll("[data-nav-link]").forEach((link) => {
    link.addEventListener("click", () => {
      setState({ menuOpen: false });
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    });
  });
}
