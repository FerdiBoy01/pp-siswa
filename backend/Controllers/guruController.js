const guruModel = require("../models/guruModel");

//tampil data guru
const tampiLGuru = (req, res) => {
  guruModel.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

//tambah guru
const tambahGuru = (req, res) => {
  const { nama, nip, no_telp, email } = req.body;
  const data = [nama, nip, no_telp, email];
  guruModel.addGuru(data, (err, result) => {
    if (err) return res.status(500).json({ error: "gagal menambahkan data guru", detail: err });
    res.json({ message: "data berhasil di tambahkan", id: result.insertId });
  });
};

//editguru
const editGuru = (req, res) => {
  const id = req.params.id;
  const { nama, nip, no_telp, email } = req.body;
  const data = [nama, nip, no_telp, email];
  guruModel.updateGuru(data, id, (err, result) => {
    if (err) return res.status(500).json({ error: "gagal update data guru", error: err });
    if (result.affectedRows === 0) return res.status(404).json({ error: "id guru tidak ditemukan" });
    res.json({ message: "berhasil update data guru" });
  });
};

//hapus guru
const hapusGuru = (req, res) => {
  const id = req.params.id;
  guruModel.deleteGuru(id, (err, result) => {
    if (err) return res.status(500).json({ error: "id guru tidak ditemukan", error: err });
    if (result.effectedRows === 0) return res.status(404).json({ error: "gagal hapus data guru" });
    res.json({ message: "berhasil menghapus data" });
  });
};

module.exports = {
  tampiLGuru,
  tambahGuru,
  editGuru,
  hapusGuru,
};
