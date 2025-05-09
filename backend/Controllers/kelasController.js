const kelasModel = require("../models/kelasModel"); //jangan lupa hubungkan dengan models

//tampilkan Ambil semua kelas
const getKelas = (req, res) => {
  kelasModel.getAllKelas((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

//logika add data kelas
const tambahKelas = (req, res) => {
  const { nama_kelas } = req.body;
  const data = [nama_kelas];
  kelasModel.addKelas(data, (err, result) => {
    if (err) return res.status(500).json({ error: "data gagal di tambahkan", detail: err });
    res.json({ messege: "kelas berhail di tambahkan", id: result.insertId });
  });
};

//lgika edit kelas
const editKelas = (req, res) => {
  const id = req.params.id;
  const { nama_kelas } = req.body;
  const data = [nama_kelas];
  kelasModel.updateKlas(data, id, (err, result) => {
    if (err) return res.status(500).json({ error: "gagal update kelas", error: err });
    if (result.effectedRows === 0) return res.status(400).json({ error: "data kelas tidak ditemukan" });
    res.json({ messege: "update kelas success" });
  });
};

//hapus kelas
const hapusKelas = (req, res) => {
  const id = req.params.id;

  kelasModel.deleteKelas(id, (err, result) => {
    if (err) return res.status(500).json({ error: "id kelas tidak ditemukan", error: err });
    if (result.effectedRows === 0) return res.status(404).json({ error: "gagal menghapus data kelas" });
    res.json({ messege: "data berhasil di hapus" });
  });
};

module.exports = {
  getKelas,
  tambahKelas,
  editKelas,
  hapusKelas,
};
