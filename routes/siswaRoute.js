const express = require("express");
const router = express.Router();
const db = require("../config/dbConfig");

//GET
router.get("/", (req, res) => {
  db.query("SELECT * FROM siswa", (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

//POST
router.post("/", express.json(), (req, res) => {
  const { nama, nisn, id_kelas, no_hp, alamat, jenis_kelamin, tanggal_lahir } = req.body;

  //validasi id_kelas dari tabel kelas dulu ya
  const cekKelas = "SELECT id FROM kelas WHERE id = ?";
  db.query(cekKelas, [id_kelas], (err, kelasResult) => {
    if (err) return res.status(500).json({ erorr: "gagal cek kelas", detail: err });

    if (kelasResult.length === 0) {
      return res.status(400).json({ erorr: "id_kelas tidak ditemukan" });
    }
    //tambahkan tabel siswa
    const sql = `INSERT INTO siswa
      (nama, nisn, id_kelas, no_hp, alamat, jenis_kelamin, tanggal_lahir)
      VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [nama, nisn, id_kelas, no_hp, alamat, jenis_kelamin, tanggal_lahir], (err, result) => {
      console.error("ERROR INSERT SISWA:", err); // Tambahkan ini
      if (err) return res.status(500).json({ erorr: "gagal menambahkan data", detail: err });
      res.json({ message: "siswa berhasil di tambahkan", id: result.insertId });
    });
  });
});

module.exports = router;
