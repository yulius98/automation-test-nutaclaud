# NutaCloud Automation Test

Proyek automation testing untuk menguji fungsionalitas login aplikasi NutaCloud menggunakan Playwright framework.

## 📋 Deskripsi

Project ini berisi automated test cases untuk memvalidasi fitur login di aplikasi web NutaCloud (https://www.nutacloud.com). Test cases mencakup skenario positif dan negatif untuk memastikan sistem login berfungsi dengan benar.

## 🛠️ Teknologi yang Digunakan

- **Playwright**: Framework automation testing
- **JavaScript**: Bahasa pemrograman
- **Node.js**: Runtime environment

## 📁 Struktur Project

```
├── pages/
│   └── LoginPage.js          # Page Object Model untuk halaman login
├── tests/
│   ├── nutatest.spec.js      # Test cases untuk login functionality
│   └── example.spec.js       # Contoh test dari Playwright
├── test-results/             # Hasil eksekusi test
├── playwright-report/        # HTML report hasil test
├── package.json              # Dependencies dan scripts
├── playwright.config.js      # Konfigurasi Playwright
└── README.md                # Dokumentasi project
```

## 🧪 Test Cases

### Login Functionality Tests
1. **Test Login dengan data valid** - Memverifikasi login berhasil dengan kredensial yang benar
2. **Test Login dengan invalid nama perusahaan** - Memverifikasi error handling untuk nama perusahaan yang salah
3. **Test Login dengan invalid username** - Memverifikasi error handling untuk username yang salah
4. **Test Login dengan invalid password** - Memverifikasi error handling untuk password yang salah

## 🚀 Instalasi dan Setup

### Prerequisites
- Node.js (versi 16 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. Clone repository ini:
   ```bash
   git clone <repository-url>
   cd automation-test-nutaclaud
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## ▶️ Menjalankan Tests

### Menjalankan semua tests:
```bash
npx playwright test
```

### Menjalankan test spesifik:
```bash
npx playwright test nutatest.spec.js
```

### Menjalankan test dengan UI mode:
```bash
npx playwright test --ui
```

### Menjalankan test di browser tertentu:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## 📊 Melihat Report

### Membuka HTML report:
```bash
npx playwright show-report
```

### Melihat trace untuk debug:
```bash
npx playwright show-trace test-results/[test-name]/trace.zip
```

## 📝 Konfigurasi

Project ini dikonfigurasi untuk:
- Menjalankan test di 3 browser: Chromium, Firefox, dan Safari
- Menggunakan HTML reporter untuk hasil test
- Menyimpan trace saat test gagal untuk debugging
- Menjalankan test secara parallel

## 🔧 Page Object Model

Project ini menggunakan Page Object Model pattern:
- `LoginPage.js`: Mengandung semua locator dan method untuk interaksi dengan halaman login

### Contoh penggunaan:
```javascript
const login = new LoginPage(page);
await login.gotoLoginPage();
await login.VerifyLogin('company', 'username', 'password');
```

## 🐛 Troubleshooting

### Common Issues:
1. **Browser tidak terinstall**: Jalankan `npx playwright install`
2. **Test timeout**: Periksa koneksi internet dan performa sistem
3. **Element tidak ditemukan**: Verifikasi locator di LoginPage.js

## 📞 Kontak

Untuk pertanyaan atau kontribusi, silakan hubungi tim QA.

## 📄 License

Project ini menggunakan lisensi ISC.