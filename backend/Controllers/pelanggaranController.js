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

//edit pelanggaran
const editPelanggaran = (req, res) => {
  const id = req.params.id;
  const { nama_pelanggaran, poin } = req.body;
  const data = [nama_pelanggaran, poin];
  pelanggaranModel.update(data, id, (err, result) => {
    if (err) return res.status(500).json({ error: "gagal update data", detail: err });
    if (result.affectedRows === 0) return res.status(400).json({ error: "id pelanggaran tidak ditemukan" });
    res.json({ messege: "berhasil update data" });
  });
};

//hapus pelanggaran
const hapusPelanggaran = (req, res) => {
  const id = req.params.id;
  pelanggaranModel.deletPelanggaran(id, (err, result) => {
    if (err) return res.status(500).json({ error: "gagal hapus data", error: err });
    if (result.affectedRows === 0) return res.status(404).json({ error: "data tidak ditemaukan" });
    res.json({ messege: "berhasil menghapus data" });
  });
};

module.exports = {
  getpelanggaran,
  tambahPelanggaran,
  editPelanggaran,
  hapusPelanggaran,
};
