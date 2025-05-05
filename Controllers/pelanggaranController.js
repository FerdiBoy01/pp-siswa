const pelanggaranModel = require("../models/pelanggaranModel");

//ambil semua pelanggaran
const getpelanggaran = (req, res) => {
  pelanggaranModel.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

//add pelanggaran
const tambahPelanggaran = (req, res) => {
  const { nama_pelanggaran, poin } = req.body;
  const data = [nama_pelanggaran, poin];
  pelanggaranModel.addPelanggaran(data, (err, result) => {
    if (err) return res.status(500).json({ error: "data gagal di tambahkan", detail: err });
    res.json({ messege: "data berhasil di tambahkan", id: result.insertId });
  });
};

module.exports = {
  getpelanggaran,
  tambahPelanggaran,
};
