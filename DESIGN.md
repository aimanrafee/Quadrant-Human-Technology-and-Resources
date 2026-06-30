# DESIGN.md
## Kos Manusia Teknologi — Rujukan Reka Bentuk

Dokumen ini merekodkan keputusan reka bentuk supaya sebarang penambahan kandungan
atau komponen baharu pada masa hadapan kekal konsisten dengan visi asal laman.

---

## 1. Falsafah

Laman ini bukan brosur korporat — ia sebuah renungan (essay digital) yang serius.
Reka bentuk mesti **mengaku berat subjek** (eksploitasi buruh, kemusnahan alam)
tanpa jatuh ke dalam dramatisasi murahan (stok gambar sedih, warna merah-darah
keterlaluan, animasi berlebihan). Disiplin visual = penghormatan kepada subjek.

Rujukan vibe: kematangan & ruang nafas seperti greatermalaysia.com, tetapi
ditukar ke daftar emosi yang lebih gelap dan reflektif.

---

## 2. Token Reka Bentuk

### Warna
| Token | Hex | Guna |
|---|---|---|
| `--color-bg` | `#0a0907` | Latar utama — hitam arang, bukan hitam tulen |
| `--color-bg-raised` | `#131210` | Kad, kaunter, seksyen empower |
| `--color-bg-elevated` | `#1b1916` | Hover state |
| `--color-border` | `#2a2722` | Garis pemisah seksyen (hairline 1px) |
| `--color-border-strong` | `#3c382f` | Sempadan elemen interaktif |
| `--color-text-primary` | `#f3efe6` | Teks utama — putih gading, bukan putih tulen |
| `--color-text-secondary` | `#a89f8e` | Perenggan badan |
| `--color-text-tertiary` | `#6f6859` | Label, caption, footer |
| `--color-accent` | `#b23a23` | **Token signature** — rust/tanah terbakar |
| `--color-accent-soft` | `#d96a4a` | Aksen pada teks (eyebrow, statistik) |
| `--color-accent-bg` | `rgba(178,58,35,.12)` | Glow ambien di hero sahaja |

**Peraturan aksen:** `--color-accent` hanya muncul pada (a) statistik penting,
(b) eyebrow/label, (c) garis kaunter hero. Jangan guna sebagai latar besar atau
butang generik — kekal sebagai "tanda perhatian", bukan hiasan.

### Tipografi
| Peranan | Fon | Sebab |
|---|---|---|
| Display/UI | Space Grotesk | Tajam, neutral, sesuai untuk struktur & data |
| Editorial/emosi | Newsreader (italic) | Petikan, tagline, closing statement — daftar "suara manusia" |

Skala: `--fs-h1` (5.25rem clamp) → `--fs-eyebrow` (0.8rem). Letter-spacing
negatif pada heading besar (`-0.02em`) untuk kesan tegas/padat.

### Ruang
Skala 8pt yang dilonggarkan (`--space-1` 0.25rem → `--space-10` 10rem).
Seksyen guna `--space-9` (7rem) menegak — whitespace luas adalah keputusan
sengaja supaya pembaca berhenti sejenak antara setiap fakta berat.

### Gerakan
- `--ease: cubic-bezier(0.22, 1, 0.36, 1)` — easing "tenang", tiada bounce.
- Scroll-reveal (`data-reveal`) — fade + translateY(18px), sekali sahaja per elemen.
- `prefers-reduced-motion` **mesti** dihormati di semua tempat — tiada kekecualian.

---

## 3. Susun Atur (Layout Concept)

```
┌─────────────────────────────────────┐
│ progress-bar (fixed, 2px, top)       │
├─────────────────────────────────────┤
│ header (sticky, transparent→blur)    │
├─────────────────────────────────────┤
│                                       │
│   HERO — heroEyebrow / heroTitle     │
│   tagline (serif italic)             │
│   [kaunter masa-nyata]  scroll-cue   │
│                                       │
├─────────────────────────────────────┤
│ intro-statement (serif, center-ish)  │
├─────────────────────────────────────┤
│ PILLAR (sticky head | scroll body)   │
│  ┌───────────┬───────────────────┐  │
│  │ eyebrow   │ body para 1       │  │
│  │ title     │ body para 2       │  │
│  │ subtitle  │ body para 3       │  │
│  │ [stat]    │ source            │  │
│  └───────────┴───────────────────┘  │
│   (ulang ×3: kobalt / data /         │
│    obsolescence)                     │
├─────────────────────────────────────┤
│ EMPOWER — grid 2×2 kad tindakan      │
│ + closing statement (serif italic)   │
├─────────────────────────────────────┤
│ footer                               │
└─────────────────────────────────────┘
```

**Pillar layout** sengaja "sticky head, scrolling body" — kepala (tajuk +
statistik) kekal di skrin manakala pembaca tatal melalui naratif. Ini
mensimulasikan rasa "fakta ini tidak berganjak walau anda cuba tatal lepas".

---

## 4. Elemen Signature

**Kaunter Kos Sebenar** (`impact-counter`) di hero — nombor kg kobalt anggaran
bertambah secara masa-nyata sejak laman dibuka. Ini satu-satunya elemen
"dramatik"/animatif yang dibenarkan menonjol; segala-galanya selain itu kekal
senyap dan berdisiplin (ikut prinsip "habiskan keberanian di satu tempat sahaja").

Nilai adalah **anggaran ilustratif** untuk tujuan kesedaran — label mesti
sentiasa jelas menyatakan ini (lihat `COUNTER_CONFIG.label` dalam `content.js`),
bukan dijual sebagai data masa-nyata yang disahkan.

---

## 5. Nada Penulisan (Bahasa Melayu)

- Ayat aktif, konkrit — elak retorik kosong.
- Setiap pillar: 3 perenggan (konteks → kos manusia → refleksi peribadi pembaca).
- Setiap dakwaan fakta disertakan `source` — kredibiliti adalah bahagian reka bentuk.
- Seksyen "Bertindak" mesti memberi tindakan **boleh buat hari ini**, bukan slogan kosong.

---

## 6. Garis Panduan Tambah Kandungan Baharu

1. Tambah pillar baharu → tambah objek ke array `PILLARS` dalam `content.js`
   sahaja. Jangan sentuh `PillarSection.js` melainkan struktur visual berubah.
2. Setiap pillar mesti ada: `id`, `eyebrow`, `title`, `subtitle`, `stat`, `body[]`, `source`.
3. Statistik (`stat.value`) mesti pendek (≤10 aksara) supaya kekal berimpak —
   letakkan butiran di `stat.label`.
4. Jangan tambah warna baharu di luar token sedia ada tanpa kemaskini jadual
   di atas dahulu.