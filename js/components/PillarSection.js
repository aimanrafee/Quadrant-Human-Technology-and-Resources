/**
 * components/PillarSection.js
 * Bina satu seksyen "paksi" (fakta utama) — kobalt, hamba data, usang terancang.
 * Setiap paksi mengandungi eyebrow, tajuk, statistik berimpak, dan badan teks.
 */
export function PillarSection(pillar) {
  return `
    <section class="section" id="${pillar.id}" data-section-id="${pillar.id}">
      <div class="wrap pillar">
        <div class="pillar-head" data-reveal>
          <p class="eyebrow">${pillar.eyebrow}</p>
          <h2 class="pillar-title">${pillar.title}</h2>
          <p class="pillar-subtitle">${pillar.subtitle}</p>
          <div class="pillar-stat">
            <p class="pillar-stat-value">${pillar.stat.value}</p>
            <p class="pillar-stat-label">${pillar.stat.label}</p>
          </div>
        </div>
        <div class="pillar-body" data-reveal="stagger">
          ${pillar.body.map((para) => `<p>${para}</p>`).join("")}
          <p class="pillar-source">${pillar.source}</p>
        </div>
      </div>
    </section>`;
}
