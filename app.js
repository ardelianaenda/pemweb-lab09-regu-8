require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rute Beranda Utama
app.get('/', (req, res) => {
    res.json({
        aplikasi: process.env.APP_NAME || 'Portal Katalog TI',
        status: 'Server Aktif',
        versi: '1.0.0'
    });
});

// === AREA PENDAFTARAN RUTE MODUL TIM ===
const anggotaRoutes = require('./routes/anggotaRoutes');
app.use('/api/anggota', anggotaRoutes);
// (Rute modul buku dan anggota akan ditambahkan di bawah baris ini)

app.listen(PORT, () => {
    console.log(`Server berjalan pada http://localhost:${PORT}`);
});