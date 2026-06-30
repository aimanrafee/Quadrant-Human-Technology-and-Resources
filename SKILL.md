# SKILL.md
## Kos Manusia Teknologi — Rujukan Seni Bina Kod

Dokumen ini menerangkan seni bina JavaScript modular laman ini: kenapa setiap
fail wujud, apa tanggungjawabnya, dan peraturan untuk mengembangkannya tanpa
merosakkan pemisahan kebimbangan (separation of concerns).

Tiada framework. ES6 modules sahaja (`<script type="module">`), dimuatkan
terus oleh `index.html` melalui `js/main.js`.

---

## 1. Prinsip Teras

```
DATA  →  STATE  →  KOMPONEN (paparan)  →  UTILS (kelakuan/DOM)
```

- **Data** (`js/data/`) tidak pernah tahu tentang DOM.
- **State** (`js/state/`) tidak pernah tahu tentang DOM — ia cuma simpan & maklum.
- **Komponen** (`js/components/`) terima data, pulangkan string HTML — tiada
  `addEventListener` di sini.
- **Utils** (`js/utils/`) memegang DOM, event listener, dan kiraan tulen yang
  boleh diuji berasingan daripada DOM.

Peraturan emas: **jika sesuatu fungsi tidak menyentuh `document`, ia tergolong
dalam `utils/analyzer.js`-jenis (logik tulen), bukan terus dalam fungsi yang
juga menulis ke DOM.** Ini membolehkan unit test tanpa jsdom.

---

## 2. Struktur Fail

```
js/
├── main.js                    # Entry point — satu-satunya fail yang "wire" semuanya
├── data/
│   └── content.js             # Sumber tunggal kandungan teks (single source of truth)
├── state/
│   └── store.js               # Observer pattern ringkas — getState() / setState()
├── components/
│   ├── Hero.js                # Komponen tulen: (data) => HTML string
│   ├── Intro.js
│   ├── PillarSection.js
│   ├── Empower.js
│   └── Page.js                # Penyusun — gabung semua komponen, suntik ke #top
└── utils/
    ├── analyzer.js            # Logik kiraan tulen (contoh: kaunter kos)
    ├── impactCounter.js       # Ikat analyzer.js ke elemen DOM + requestAnimationFrame
    ├── scrollEffects.js       # Progress bar, header, IntersectionObserver, smooth-anchor
    └── menu.js                # Toggle menu mudah alih
```

---

## 3. Kontrak Setiap Lapisan

### 3.1 `data/content.js`
- Eksport pemalar sahaja (`SITE`, `PILLARS`, `EMPOWER`, `INTRO`, `COUNTER_CONFIG`).
- Tiada fungsi, tiada side-effect, tiada import daripada DOM/browser API.
- Sebarang kemaskini teks laman **mesti** berlaku di sini sahaja.

### 3.2 `state/store.js`
- `getState()` → pulangkan salinan (`{...state}`) — pemanggil tidak boleh
  mutate state terus.
- `setState(patch)` → `Object.assign` + beritahu semua listener.
- Jangan import `document` di fail ini. Jika perlu nilai berkaitan browser
  (cth. `matchMedia`), kekalkan ia sebagai nilai awal sahaja (snapshot), bukan
  logik berterusan.

### 3.3 `components/*.js`
- Bentuk wajib: `export function NamaKomponen(data) { return `...html...`; }`
- **Tiada** `document.querySelector`, **tiada** `addEventListener` dalam fail
  komponen individu (Hero.js, Intro.js, dll). Hanya `Page.js` yang dibenarkan
  sentuh `document` — sebab tugasnya memang menyuntik HTML ke `#top`.
- Komponen tidak boleh import `state/store.js` — paparan awal hanya bergantung
  kepada `data/content.js`. Sebarang kelakuan dinamik (cth. nav aktif) berlaku
  di `utils/`, bukan di sini.

### 3.4 `utils/*.js`
- Setiap fail eksport fungsi `initX()` yang:
  1. Cari elemen DOM (`querySelector`).
  2. `if (!el) return;` — gagal senyap jika elemen tiada (defensive).
  3. Daftar event listener / observer.
- Jika fungsi ada kiraan matematik bukan-remeh (cth. kaunter, peratusan
  kemajuan), asingkan kiraan itu ke fungsi tulen berasingan (lihat
  `analyzer.js` sebagai contoh) supaya boleh diuji tanpa DOM.

### 3.5 `main.js`
- Satu-satunya fail yang import daripada **semua** lapisan.
- Tugas tunggal: panggil `renderPage()` dahulu, kemudian panggil setiap
  `initX()` mengikut susunan yang logik (render → progress → header → nav
  tracking → reveal → kaunter → menu → anchor).
- Bungkus dalam `bootstrap()` + `DOMContentLoaded` listener.

---

## 4. Cara Tambah Komponen Baharu

Contoh: tambah seksyen "Testimoni" baharu.

1. Tambah data ke `data/content.js` (cth. `export const TESTIMONIALS = [...]`).
2. Cipta `components/Testimonials.js`:
   ```js
   export function Testimonials(items) {
     return `<section class="section">...</section>`;
   }
   ```
3. Import & sisip dalam `components/Page.js`, dalam array `main.innerHTML = [...]`.
4. Jika perlu kelakuan interaktif (cth. carousel), cipta `utils/testimonials.js`
   dengan `initTestimonials()`, panggil dari `main.js`.
5. Tambah CSS berkaitan dalam `css/style.css` mengikut token sedia ada
   (rujuk `DESIGN.md`) — jangan hardcode warna/saiz baharu.

---

## 5. Cara Tambah Kelakuan Baharu (Utils)

1. Fail baharu dalam `js/utils/`, named-export fungsi `initX()`.
2. Jika ada kiraan tulen, letak dalam fungsi berasingan tanpa rujukan DOM
   (boleh letak fail sama jika kecil, atau `utils/analyzer.js` jika berkaitan
   kiraan kaunter sedia ada).
3. Import & panggil dalam `main.js` → `bootstrap()`.
4. Hormati `getState().reducedMotion` untuk sebarang animasi/transisi baharu.

---

## 6. Ujian Manual Pantas (Tiada Build Step)

Laman ini guna ES6 module asli — tiada bundler. Untuk uji secara tempatan:

```bash
# Dari root repo
python3 -m http.server 8000
# Buka http://localhost:8000
```

(Fail `index.html` guna `<script type="module">`, jadi **mesti** dilayan
melalui HTTP server — tidak boleh buka terus sebagai `file://` kerana
sekatan CORS pada modul ES6.)

---

## 7. Senarai Semak Sebelum Push

- [ ] Tiada `console.log` tertinggal.
- [ ] Semua laluan import relatif (`./` / `../`) — tiada laluan mutlak.
- [ ] Komponen baharu tidak menyentuh `document` secara terus.
- [ ] Kelakuan baharu menyemak `el` wujud sebelum daftar event.
- [ ] Animasi baharu menghormati `prefers-reduced-motion`.
- [ ] Teks baharu hanya ditambah di `data/content.js`.
- [ ] Diuji di `localhost` (bukan `file://`) sebelum push ke GitHub Pages.