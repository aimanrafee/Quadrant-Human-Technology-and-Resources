/**
 * components/Hero.js
 * Bina markup bahagian hero (paparan pertama laman).
 */
export function Hero(site, counterConfig) {
  return `
    <section class="hero">
      <div class="wrap">
        <p class="eyebrow" data-reveal>${site.heroEyebrow}</p>
        <h1 class="hero-title" data-reveal>${site.heroTitle}</h1>
        <p class="hero-tagline" data-reveal>&ldquo;${site.tagline}&rdquo;</p>
        <div class="hero-foot" data-reveal>
          <div class="impact-counter" role="status" aria-live="off">
            <span class="impact-counter-value" data-impact-counter>0.000</span>
            <span class="impact-counter-unit">${counterConfig.unit}</span>
            <p class="impact-counter-label" data-impact-label></p>
          </div>
          <div class="scroll-cue">
            <span class="line" aria-hidden="true"></span>
            Tatal ke bawah untuk teruskan
          </div>
        </div>
      </div>
    </section>`;
}
