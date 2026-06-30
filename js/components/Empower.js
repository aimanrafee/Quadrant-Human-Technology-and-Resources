/**
 * components/Empower.js
 * Bina seksyen terakhir — galakan bertindak ("protes senyap").
 */
export function Empower(empower) {
  return `
    <section class="section empower" id="empower" data-section-id="empower">
      <div class="wrap">
        <p class="eyebrow" data-reveal>${empower.eyebrow}</p>
        <h2 class="pillar-title" data-reveal>${empower.title}</h2>
        <p class="pillar-subtitle" data-reveal>${empower.subtitle}</p>
        <div class="empower-grid" data-reveal>
          ${empower.points
            .map(
              (pt, i) => `
            <article class="empower-card">
              <p class="empower-card-index">${String(i + 1).padStart(2, "0")}</p>
              <h3 class="empower-card-title">${pt.title}</h3>
              <p class="empower-card-body">${pt.body}</p>
            </article>
          `
            )
            .join("")}
        </div>
        <p class="empower-closing" data-reveal>${empower.closing}</p>
      </div>
    </section>`;
}
