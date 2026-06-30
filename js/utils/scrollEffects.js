/**
 * utils/scrollEffects.js
 * Semua kelakuan berkaitan scroll/viewport: bar kemajuan, header,
 * penjejakan seksyen aktif, animasi reveal, dan smooth-scroll anchor.
 */
import { getState, setState } from "../state/store.js";

/* 1. Progress bar — kemajuan bacaan menegak */
export function initProgressBar() {
  const bar = document.querySelector("[data-progress-bar]");
  if (!bar) return;

  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
    bar.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
  };

  document.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* 2. Header — tukar gaya semasa scroll */
export function initHeaderState() {
  const header = document.querySelector("[data-header]");
  if (!header) return;

  const onScroll = () => {
    const scrolled = window.scrollY > 24;
    header.classList.toggle("is-scrolled", scrolled);
    if (scrolled !== getState().hasScrolled) {
      setState({ hasScrolled: scrolled });
    }
  };

  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* 3. Penjejakan seksyen aktif untuk navigasi */
export function initActiveSectionTracking() {
  const sections = document.querySelectorAll("[data-section-id]");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.sectionId;
          setState({ activePillarId: id });
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.dataset.navLink === id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* 4. Scroll-reveal — animasi mikro elemen masuk viewport */
export function initScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) return;

  if (getState().reducedMotion) {
    targets.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

/* 5. Smooth-scroll untuk pautan dalaman (anchor) */
export function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: getState().reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  });
}
