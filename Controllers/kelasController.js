const kelasModel = require("../models/kelasModel");

// Ambil semua kelas
const getKelas = (req, res) => {
  kelasModel.getAllKelas((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

module.exports = {
  getKelas,
};
