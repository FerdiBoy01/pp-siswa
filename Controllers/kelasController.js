const kelasModel = require("../models/kelasModel");

// Ambil semua kelas
const getKelas = (req, res) => {
  kelasModel.getAllKelas((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

//add data kelas
const tambahKelas = (req, res) => {
  const { nama_kelas } = req.body;
  const data = [nama_kelas];
  kelasModel.addKelas(data, (err, result) => {
    if (err) return res.status(500).json({ error: "data gagal di tambahkan", detail: err });
    res.json({ messege: "kelas berhail di tambahkan", id: result.insertId });
  });
};

module.exports = {
  getKelas,
  tambahKelas,
};
