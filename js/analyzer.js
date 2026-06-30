/**
 * utils/analyzer.js
 * Logik kiraan tulen (pure logic) bagi "kaunter kos sebenar".
 * Diasingkan daripada DOM supaya boleh diuji secara berasingan.
 */

/**
 * Kira anggaran kuantiti (kg) berdasarkan masa berlalu sejak laman dibuka.
 * @param {number} startTime - timestamp (ms) bila kaunter bermula
 * @param {number} kgPerSecond - kadar anggaran setiap saat
 * @param {number} [now] - timestamp semasa (ms), default Date.now()
 * @returns {number} nilai terkumpul (kg)
 */
export function computeAccumulated(startTime, kgPerSecond, now = Date.now()) {
  const elapsedSeconds = Math.max(0, (now - startTime) / 1000);
  return elapsedSeconds * kgPerSecond;
}

/**
 * Format nilai kepada string 3 titik perpuluhan untuk paparan.
 * @param {number} value
 */
export function formatImpactValue(value) {
  return value.toFixed(3);
}
