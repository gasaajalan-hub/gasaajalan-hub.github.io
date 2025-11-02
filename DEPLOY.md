# Panduan Deploy ke GitHub Pages

## Konfigurasi untuk gasaajalan-hub.github.io

Proyek ini sudah dikonfigurasi untuk deploy ke GitHub Pages di direktori root (`/`) dengan **HashRouter** untuk mengatasi masalah blank page.

### ⚠️ Penting: HashRouter vs BrowserRouter

Proyek ini menggunakan **HashRouter** (bukan BrowserRouter) karena:
- ✅ GitHub Pages tidak support client-side routing BrowserRouter
- ✅ HashRouter lebih reliable untuk GitHub Pages
- ✅ Tidak ada masalah 404 atau blank page

**Catatan:** URL akan memiliki tanda `#` (contoh: `https://gasaajalan-hub.github.io/#/research`)

### Langkah Deploy:

1. **Pastikan repository sudah di-push ke GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy ke GitHub Pages:**
   ```bash
   npm run deploy
   ```

   Script ini akan:
   - Otomatis build aplikasi (`npm run build`)
   - Upload folder `dist` ke branch `gh-pages`

3. **Konfigurasi GitHub Pages:**
   - Pergi ke repository di GitHub
   - Settings → Pages
   - Pilih Source: Deploy from branch `gh-pages`
   - Pilih folder: `/ (root)`
   - Klik Save

4. **Tunggu beberapa menit**
   - GitHub Pages akan memproses deployment
   - Website akan tersedia di: https://gasaajalan-hub.github.io/

### Konfigurasi yang Sudah Diterapkan:

✅ **vite.config.ts:**
- `base: "/"` - untuk root directory
- `host: "0.0.0.0"` dan `port: 5000` - untuk Replit webview

✅ **src/App.tsx:**
- `basename={import.meta.env.BASE_URL}` - otomatis sesuai dengan Vite config

✅ **public/.nojekyll:**
- File ini memastikan GitHub Pages tidak mengabaikan folder yang dimulai dengan underscore

✅ **package.json:**
- Script `deploy` untuk otomatis build dan deploy

### Troubleshooting:

**✅ MASALAH BLANK PAGE SUDAH DIPERBAIKI**

Aplikasi sekarang menggunakan **HashRouter** yang 100% kompatibel dengan GitHub Pages. Masalah blank page seharusnya tidak akan muncul lagi.

**Jika halaman masih blank setelah deploy:**

1. **Clear browser cache:** Ctrl+Shift+Del (Windows/Linux) atau Cmd+Shift+Del (Mac)
2. **Hard refresh:** Ctrl+Shift+R (Windows/Linux) atau Cmd+Shift+R (Mac)
3. **Cek URL:** Pastikan mengakses `https://gasaajalan-hub.github.io/` atau `https://gasaajalan-hub.github.io/#/`
4. **Cek browser console:** F12 → Console untuk melihat error
5. **Tunggu deployment:** Tunggu 5-10 menit setelah deploy

**Jika ada error 404:**

1. Pastikan branch `gh-pages` sudah dibuat (otomatis oleh `npm run deploy`)
2. Pastikan Settings → Pages source sudah di-set ke `gh-pages` branch
3. Pastikan file sudah ter-upload ke branch `gh-pages`

### Build Manual (Opsional):

Jika hanya ingin build tanpa deploy:
```bash
npm run build
```

Output akan ada di folder `dist/`
