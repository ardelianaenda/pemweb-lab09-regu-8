// routes/bukuRoutes.js
const express = require('express');
const router = express.Router();

const daftarBuku = [
 { id: 1, judul: 'Arsitektur Node.js Modern', penulis: 'Andi Wijaya' },
 { id: 2, judul: 'Rekayasa Perangkat Lunak', penulis: 'Siti Rahma' }
];

router.get('/', (req, res) => {
 res.json({ modul: 'Katalog Buku', total: daftarBuku.length, data: daftarBuku });
});

module.exports = router;