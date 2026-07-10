# Dietary — Personalized Nutrition Coaching (UAS Project)

Realisasi React.js dari desain Figma "Dietary" (Home Page - Desktop).

## Struktur Halaman (React Router)
Aplikasi ini multi-halaman menggunakan `react-router-dom` — setiap menu di Navbar benar-benar
pindah halaman (bukan cuma anchor scroll).

| Route       | File                        | Isi                                                              |
|-------------|-----------------------------|-------------------------------------------------------------------|
| `/`         | `src/pages/Home.jsx`        | Hero, Features, Blogs (preview), Testimonials, Pricing (preview)   |
| `/about`    | `src/pages/About.jsx`       | Welcome + Our Story (timeline) + Company Achievements              |
| `/process`  | `src/pages/Process.jsx`     | **Placeholder** — desain Figma-nya belum dikirim, edit bebas       |
| `/pricing`  | `src/pages/PricingPage.jsx` | Pricing detail + tabel perbandingan fitur + FAQ accordion          |
| `/blog`     | `src/pages/BlogPage.jsx`    | Blog listing + filter kategori (fetch API per kategori)            |
| `/contact`  | `src/pages/Contact.jsx`     | Form kontak (controlled input via useState) + info kontak          |

`src/components/Layout.jsx` membungkus semua halaman dengan `Navbar` + `Footer` yang sama.

## Struktur Komponen
- `src/components/Navbar.jsx` — top announcement bar + navigasi antar-halaman (NavLink)
- `src/components/Hero.jsx` — hero section dengan CTA
- `src/components/Features.jsx` — 6 kartu fitur
- `src/components/Blogs.jsx` — **useEffect + fetch API (Dev.to)** + **useState** (like & bookmark) — preview di homepage
- `src/components/Testimonials.jsx` — carousel testimoni (useState untuk slide aktif)
- `src/components/Pricing.jsx` — **useState** toggle Monthly/Yearly — preview di homepage
- `src/components/Footer.jsx` — footer
- `src/components/PageHeader.jsx` — banner hijau reusable di halaman About/Pricing/Blog/Contact
- `src/components/ImagePlaceholder.jsx` — kotak placeholder untuk foto yang belum di-export dari Figma

## Catatan Penting Sebelum Demo
1. **Halaman Process** (`/process`) belum ada desain Figma-nya saat dikerjakan, jadi masih
   placeholder sederhana. Kirim desainnya kalau ada, atau edit langsung kontennya.
2. Foto-foto di halaman **About → Our Story** (10 kartu timeline) belum tersedia sebagai aset
   terpisah dari screenshot Figma. Saat ini ditampilkan sebagai kotak placeholder hijau + ikon.
   Export tiap foto dari Figma dan ganti di `src/pages/About.jsx` (komponen `ImagePlaceholder`)
   supaya 1:1 dengan desain.
3. Peta di halaman **Contact** masih placeholder — ganti dengan embed Google Maps (`<iframe>`)
   sesuai lokasi asli.

## Cara Menjalankan (Lokal)

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Sebelum Demo: Lengkapi Aset Ilustrasi

Desain asli memakai ilustrasi karakter (perempuan makan sambil pegang HP, ilustrasi blog, dll)
yang tidak bisa saya ambil otomatis dari screenshot. Supaya tampilan 1:1 dengan Figma:

1. Export ilustrasi hero dari Figma sebagai PNG/SVG.
2. Simpan sebagai `src/assets/hero-illustration.png`.
3. Untuk gambar blog, komponen `Blogs.jsx` sudah otomatis mengambil gambar dari API Dev.to,
   jadi tidak perlu aset manual — tapi kamu boleh menggantinya jika ingin gambar ilustrasi
   kartun sesuai desain asli.

## Integrasi Public API

`Blogs.jsx` menggunakan **Dev.to API** (`https://dev.to/api/articles?tag=health`) untuk menarik
artikel kesehatan/nutrisi secara real-time — tidak butuh API key, gratis, dan CORS-friendly.

## Deploy ke Vercel

1. Push folder ini ke repository GitHub.
2. Buka [vercel.com](https://vercel.com) → **New Project** → import repo tersebut.
3. Framework preset: **Vite** (otomatis terdeteksi).
   - Build command: `npm run build`
   - Output directory: `dist`
4. Klik **Deploy**. Setelah selesai kamu akan mendapat URL live (`https://namaproject.vercel.app`).

## Responsivitas
Layout memakai grid Bootstrap 5 (`row`, `col-md-*`, `col-lg-*`) sehingga otomatis menyesuaikan
dari Desktop ke Mobile. Uji dengan Chrome DevTools (Toggle Device Toolbar) di lebar 375px, 768px,
dan 1440px sebelum demo.
