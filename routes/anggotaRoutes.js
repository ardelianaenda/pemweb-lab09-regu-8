// routes/anggotaRoutes.js
const express = require('express');
const router = express.Router();
const daftarAnggota = [
 { nim: '42530001', nama: 'Budi Santoso', divisi: 'Backend' },
 { nim: '42530002', nama: 'Clara Wijaya', divisi: 'Frontend' }
];
router.get('/', (req, res) => {
 res.json({ modul: 'Direktori Anggota', total: daftarAnggota.length, data:
daftarAnggota });
});
module.exports = router;