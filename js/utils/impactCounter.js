/**
 * utils/impactCounter.js
 * Mengikat logik kiraan (analyzer.js) kepada elemen DOM kaunter.
 */
import { COUNTER_CONFIG } from "../data/content.js";
import { getState } from "../state/store.js";
import { computeAccumulated, formatImpactValue } from "./analyzer.js";

export function initImpactCounter() {
  const valueEl = document.querySelector("[data-impact-counter]");
  const labelEl = document.querySelector("[data-impact-label]");
  if (!valueEl) return;

  if (labelEl) labelEl.textContent = COUNTER_CONFIG.label;

  if (getState().reducedMotion) {
    valueEl.textContent = formatImpactValue(0);
    return;
  }

  const { counterStartTime } = getState();

  const tick = () => {
    const value = computeAccumulated(counterStartTime, COUNTER_CONFIG.kgPerSecond);
    valueEl.textContent = formatImpactValue(value);
    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}
