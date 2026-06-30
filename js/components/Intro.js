/**
 * components/Intro.js
 * Bina markup pernyataan pembuka (framing statement) selepas hero.
 */
export function Intro(intro) {
  return `
    <section class="section">
      <div class="wrap">
        <p class="intro-statement" data-reveal>
          ${intro.before}<span class="muted">${intro.muted}</span>
          ${intro.after}
        </p>
      </div>
    </section>`;
}
