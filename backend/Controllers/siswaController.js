const siswaModel = require("../models/siswaModel");

// Ambil semua siswa
const getSiswa = (req, res) => {
  siswaModel.getAllSiswa((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

//rekap nilai
const getRekapPelanggaran = (req, res) => {
  siswaModel.getRekapPelanggaran((err, result) => {
    if (err) return res.status(500).json({ error: "Gagal ambil data", detail: err });

    // Tambahkan status berdasarkan total poin
    const data = result.map((siswa) => {
      let status = "Aman";
      if (siswa.total_poin >= 100) status = "Panggil Orang Tua";
      else if (siswa.total_poin >= 50) status = "Waspada";

      return { ...siswa, status };
    });

    res.json(data);
  });
};

// POST
const tambahSiswa = (req, res) => {
  const { nama, nisn, id_kelas, no_hp, alamat, jenis_kelamin, tanggal_lahir } = req.body;

  siswaModel.cekKelas(id_kelas, (err, kelasResult) => {
    if (err) return res.status(500).json({ error: "Gagal cek kelas", detail: err });
    if (kelasResult.length === 0) return res.status(400).json({ error: "id_kelas tidak ditemukan" });

    const data = [nama, nisn, id_kelas, no_hp, alamat, jenis_kelamin, tanggal_lahir];
    siswaModel.add(data, (err, result) => {
      if (err) return res.status(500).json({ error: "Gagal tambah siswa", detail: err });
      res.json({ message: "Siswa berhasil ditambahkan", id: result.insertId });
    });
  });
};

// PUT
const editSiswa = (req, res) => {
  const id = req.params.id;
  const { nama, nisn, id_kelas, no_hp, alamat, jenis_kelamin, tanggal_lahir } = req.body;
  //validasi cek kelas
  siswaModel.cekKelas(id_kelas, (err, kelasResult) => {
    if (err) return res.status(500).json({ error: "Gagal cek kelas", detail: err });
    if (kelasResult.length === 0) return res.status(400).json({ error: "id_kelas tidak ditemukan" });

    const data = [nama, nisn, id_kelas, no_hp, alamat, jenis_kelamin, tanggal_lahir];
    siswaModel.update(data, id, (err, result) => {
      if (err) return res.status(500).json({ error: "Gagal update", detail: err });
      if (result.affectedRows === 0) return res.status(404).json({ error: "Siswa tidak ditemukan" });
      res.json({ message: "Data siswa berhasil diubah" });
    });
  });
};

//DELETE
const hapusSiswa = (req, res) => {
  const id = req.params.id;

  siswaModel.deleteSiswa(id, (err, result) => {
    if (err) return res.status(500).json({ error: "gagal menghapus siswa", detail: err });

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "data siswa tidak ditemukan" });
    }

    res.json({ message: "siswa berhail di hapus" });
  });
};

module.exports = {
  getSiswa,
  tambahSiswa,
  editSiswa,
  hapusSiswa,
  getRekapPelanggaran,
};
