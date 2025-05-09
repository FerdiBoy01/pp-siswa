const db = require("../config/dbConfig");

const getAll = (collback) => {
  const sql = `SELECT * FROM siswa_pelanggaran`;
  db.query(sql, collback);
};

//tambah pelanggaran
const tambahPelanggaran = (data, callback) => {
  const sql = `INSERT INTO siswa_pelanggaran
    (siswa_id, pelanggaran_id, tanggal) VALUES (?, ?, ?)`;
  db.query(sql, data, callback);
};
//validasi siswa
const cekSiswa = (id, collback) => {
  const sql = `SELECT * FROM siswa WHERE id = ?`;
  db.query(sql, [id], collback);
};
//validasi kelas
const cekKelas = (id_kelas, collback) => {
  const sql = `SELECT * FROM kelas WHERE id = ?`;
  db.query(sql, [id_kelas], collback);
};

module.exports = {
  getAll,
  tambahPelanggaran,
  cekSiswa,
  cekKelas,
};
