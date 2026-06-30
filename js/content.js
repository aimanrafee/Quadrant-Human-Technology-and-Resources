/**
 * content.js
 * Sumber tunggal kandungan teks laman web.
 * Mengasingkan data daripada paparan (UI) supaya kandungan boleh
 * dikemaskini tanpa menyentuh logik komponen.
 */

export const SITE = {
  title: "Kos Manusia Teknologi",
  tagline: "Setiap notifikasi yang anda terima, ada manusia di sebalik harganya.",
  heroEyebrow: "Sebuah Renungan Digital",
  heroTitle: "Setiap peranti menyimpan <em>kisah manusia</em> yang tidak terpapar pada skrin.",
};

export const INTRO = {
  before: "Telefon di tangan anda melalui empat babak tersembunyi sebelum sampai ke poket anda — ",
  muted: "dan satu babak lagi selepas anda membuangnya.",
  after: "Ini adalah babak-babak itu.",
};

export const PILLARS = [
  {
    id: "kobalt",
    eyebrow: "Bahagian 01 — Bumi",
    title: "Tanah Merah Kongo",
    subtitle: "Kobalt yang menghidupkan bateri telefon anda, ditambang dengan tangan kanak-kanak.",
    stat: { value: "40,000+", label: "kanak-kanak dianggarkan bekerja di lombong artisanal DRC" },
    body: [
      "Di selatan Republik Demokratik Kongo, di bawah lapisan tanah merah Lubumbashi dan Kolwezi, tersimpan lebih separuh bekalan kobalt dunia — mineral yang membolehkan bateri lithium-ion anda bertahan sepanjang hari. Tetapi kobalt ini tidak datang percuma.",
      "Ramai penambang bekerja tanpa alat keselamatan asas, menggali terowong cetek yang mudah runtuh, demi gaji yang tidak sampai dua dolar sehari. Sesetengah daripada mereka masih kanak-kanak — usia tangan mereka sepatutnya memegang pensel, bukan cangkul.",
      "Setiap kali kita menukar telefon kerana 'bosan' atau 'nak yang baharu', kita turut menambah permintaan terhadap mineral yang ditambang dengan darah dan peluh ini. Kemajuan teknologi kita dibina di atas penderitaan yang jarang kita lihat.",
    ],
    source: "Berdasarkan laporan Amnesty International, UNICEF dan siasatan Washington Post mengenai rantaian bekalan kobalt DRC.",
  },
  {
    id: "data",
    eyebrow: "Bahagian 02 — Minda",
    title: "Hamba Data AI",
    subtitle: "Kecerdasan buatan yang 'bijak' itu, diajar oleh manusia yang dibayar rendah untuk melihat kandungan paling toksik di dunia.",
    stat: { value: "USD 1.32", label: "purata bayaran sejam bagi pelabel data di sesetengah negara Afrika Timur" },
    body: [
      "Di sebalik chatbot AI yang sopan dan 'selamat', terdapat barisan pekerja di Kenya, Filipina dan India yang menyaring berjuta-juta keping data — termasuk kandungan keganasan, eksploitasi kanak-kanak, dan kebencian — supaya model AI tidak memaparkannya kepada anda.",
      "Mereka digelar 'penanda data' atau data labeler. Tugas mereka adalah melatih algoritma untuk mengenali apa yang 'buruk', dengan membaca dan menonton perkara buruk itu sendiri, berjam-jam, setiap hari, dengan kontrak sementara dan tiada sokongan kesihatan mental.",
      "Ramai antara mereka melaporkan trauma berpanjangan, gangguan tidur, dan tekanan psikologi — semuanya demi memastikan AI yang kita gunakan kelihatan 'ajaib' dan automatik. Kepintaran buatan bukan ajaib; ia dibina di atas buruh manusia yang tersembunyi.",
    ],
    source: "Berdasarkan laporan TIME, Wired dan The Guardian mengenai industri pelabelan data dan moderasi kandungan AI.",
  },
  {
    id: "obsolescence",
    eyebrow: "Bahagian 03 — Pasaran",
    title: "Perangkap Direka Usang",
    subtitle: "Peranti anda tidak rosak secara kebetulan. Ia direka untuk gagal — tepat selepas waranti tamat.",
    stat: { value: "53.6 juta", label: "tan sisa elektronik (e-waste) dihasilkan dunia setiap tahun" },
    body: [
      "Planned obsolescence — atau 'usang terancang' — ialah strategi perniagaan di mana syarikat sengaja mereka produk dengan jangka hayat terhad: bateri yang tidak boleh ditukar, perisian yang melambatkan model lama, alat ganti yang sukar didapati, dan reka bentuk yang menyukarkan pembaikan.",
      "Hasilnya, pengguna terpaksa membeli model baharu bukan kerana keperluan, tetapi kerana ia dipaksa oleh reka bentuk produk itu sendiri. Setiap unit baharu ini memerlukan lebih banyak kobalt, lebih banyak buruh, dan meninggalkan lebih banyak sisa toksik di negara membangun yang menjadi tempat pelupusan akhirnya.",
      "Kitaran ini bukan kemajuan — ia adalah model perniagaan yang menjadikan bumi dan manusia sebagai kos yang boleh dilupakan, demi keuntungan suku tahunan syarikat gergasi teknologi.",
    ],
    source: "Berdasarkan Global E-waste Monitor (PBB) dan kajian dasar reka bentuk produk oleh iFixit serta European Right to Repair.",
  },
];

export const EMPOWER = {
  eyebrow: "Bahagian 04 — Pilihan",
  title: "Protes Paling Senyap: Jangan Tukar",
  subtitle: "Anda tidak perlu menderma atau bertempik di jalanan. Cukup dengan menolak untuk membeli, anda sudah memberontak.",
  points: [
    {
      title: "Gunakan sehingga ia benar-benar mati",
      body: "Peranti yang masih berfungsi tidak memerlukan penggantian. Setiap tahun tambahan yang anda gunakan sesuatu peranti adalah satu tahun kurang permintaan terhadap kobalt baharu.",
    },
    {
      title: "Baiki, jangan buang",
      body: "Cari kedai pembaikan tempatan sebelum membeli baharu. Skrin pecah dan bateri lemah selalunya boleh diperbaiki dengan kos jauh lebih rendah daripada unit baharu.",
    },
    {
      title: "Tanya 'kenapa' sebelum 'bila'",
      body: "Sebelum menukar peranti, tanya diri: adakah ia rosak, atau saya hanya terpengaruh dengan pengiklanan? Kesedaran terhadap soalan ini sahaja sudah satu bentuk penolakan.",
    },
    {
      title: "Sokong pembaikan sejagat",
      body: "Sokong dasar 'Right to Repair' yang memaksa syarikat menyediakan alat ganti dan manual pembaikan kepada orang awam, bukan hanya kepada pusat servis rasmi mereka.",
    },
  ],
  closing: "Konsumerisme yang melulu bukan kemajuan — ia hanya kitaran yang menyembunyikan kos sebenarnya daripada mata kita. Pilihan paling berkuasa yang anda ada hari ini, ialah memilih untuk tidak membeli.",
};

export const COUNTER_CONFIG = {
  // Anggaran ilustratif berdasarkan purata penambangan kobalt artisanal DRC
  // (untuk tujuan kesedaran, bukan data masa nyata yang disahkan).
  kgPerSecond: 0.014,
  label: "Anggaran kobalt ditambang secara artisanal sejak anda membuka laman ini",
  unit: "kg",
};
