/**
 * state.js
 * Pengurusan keadaan (state) ringkas menggunakan corak Observer.
 * Tiada kebergantungan luar — Vanilla JS sepenuhnya.
 */

const listeners = new Set();

const state = {
  activePillarId: null,     // ID paksi yang sedang aktif/fokus dalam viewport
  hasScrolled: false,       // Sama ada pengguna sudah scroll melepasi hero
  counterStartTime: Date.now(),
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  menuOpen: false,
};

/**
 * Dapatkan salinan state semasa (read-only by convention).
 */
export function getState() {
  return { ...state };
}

/**
 * Kemaskini state dan maklumkan semua pendengar (subscribers).
 * @param {Partial<typeof state>} patch
 */
export function setState(patch) {
  Object.assign(state, patch);
  listeners.forEach((fn) => fn(getState()));
}


