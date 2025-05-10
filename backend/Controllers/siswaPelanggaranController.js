const { json } = require("express");
const siswaPelanggaranModel = require("../models/siswaPelanggaranModel");

//get all siswa
const tampilSiswa = (req, res) => {
  siswaPelanggaranModel.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

// POST
const tambahSiswaP = (req, res) => {
  const { siswa_id, pelanggaran_id, guru_id, tanggal } = req.body;

  siswaPelanggaranModel.cekSiswa(siswa_id, (err, pelanggaranResult) => {
    if (err) return res.status(500).json({ error: "Gagal cek siswa", detail: err });
    if (pelanggaranResult.length === 0) return res.status(404).json({ error: "siswa_id tidak ditemukan" });

    const data = [siswa_id, pelanggaran_id, guru_id, tanggal];
    siswaPelanggaranModel.tambahPelanggaran(data, (err, result) => {
      if (err) return res.status(500).json({ error: "Gagal tambah pelanggaran siswa", detail: err });
      res.json({ message: "pelanggaran siswa berhasil ditambahkan", id: result.insertId });
    });
  });
};

module.exports = {
  tampilSiswa,
  tambahSiswaP,
};
