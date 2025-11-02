#!/bin/bash

echo "========================================"
echo "🚀 DEPLOY WEBSITE KE GITHUB PAGES"
echo "========================================"
echo ""
echo "Script ini akan deploy website dengan routing yang sudah diperbaiki"
echo ""

# Step 1: Add all changes
echo "📦 Step 1/4: Menambahkan semua perubahan..."
git add .
if [ $? -ne 0 ]; then
    echo "❌ Error: Gagal menambahkan file"
    exit 1
fi
echo "✅ Berhasil!"
echo ""

# Step 2: Commit
echo "💾 Step 2/4: Commit perubahan..."
git commit -m "Fix blank page - Deploy HashRouter version to GitHub Pages"
if [ $? -ne 0 ]; then
    echo "⚠️  Warning: Tidak ada perubahan untuk commit atau sudah di-commit"
fi
echo "✅ Berhasil!"
echo ""

# Step 3: Push to main
echo "⬆️  Step 3/4: Push ke GitHub main branch..."
git push origin main
if [ $? -ne 0 ]; then
    echo "❌ Error: Gagal push ke GitHub"
    echo ""
    echo "Kemungkinan Anda perlu Personal Access Token."
    echo "Buat token di: https://github.com/settings/tokens"
    exit 1
fi
echo "✅ Berhasil!"
echo ""

# Step 4: Deploy to GitHub Pages
echo "🌐 Step 4/4: Deploy ke GitHub Pages..."
npm run deploy
if [ $? -ne 0 ]; then
    echo "❌ Error: Gagal deploy ke GitHub Pages"
    exit 1
fi
echo ""
echo "========================================"
echo "✅ DEPLOYMENT SELESAI!"
echo "========================================"
echo ""
echo "📌 LANGKAH SELANJUTNYA:"
echo "1. Tunggu 3-5 menit untuk GitHub Pages memproses"
echo "2. Buka browser, tekan Ctrl+Shift+Delete (Windows) atau Cmd+Shift+Delete (Mac)"
echo "3. Clear 'Cached images and files', pilih 'All time'"
echo "4. Buka: https://gasaajalan-hub.github.io/"
echo "5. Tekan Ctrl+Shift+R (Windows) atau Cmd+Shift+R (Mac) untuk hard refresh"
echo ""
echo "✨ Website akan muncul tanpa blank page!"
echo "========================================"
