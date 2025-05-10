const db = require("../config/dbConfig");

const getAll = (collback) => {
  const sql = `SELECT * FROM siswa_pelanggaran`;
  db.query(sql, collback);
};

//menampilkan nama guru dan kelas
const getDetailAll = (collback) => {
  const sql = `SELECT
  siswa_pelanggaran.id,
  siswa.nama AS nama_siswa,
  kelas.nama_kelas AS nama_kelas,
  pelanggaran.nama_pelanggaran AS nama_pelanggaran,
  guru.nama AS nama_guru,
  siswa_pelanggaran.tanggal
  FROM siswa pelanggaran
  JOIN siswa ON siswa_pelanggaran.siswa_id = siswa.id
  JOIN kelas ON siswa.id_kelas = kelas.id
  JOIN pelanggaran ON siswa_pelanggaran.pelanggaran_id = pelanggaran.id
  JOIN guru ON siswa_pelanggaran.guru_id = guru.id
   `;
  db.query(sql, collback);
};

//tambah pelanggaran
const tambahPelanggaran = (data, callback) => {
  const sql = `INSERT INTO siswa_pelanggaran
    (siswa_id, pelanggaran_id, guru_id, tanggal) VALUES (?, ?, ?, ?)`;
  db.query(sql, data, callback);
};
//validasi siswa
const cekSiswa = (id, collback) => {
  const sql = `SELECT * FROM siswa WHERE id = ?`;
  db.query(sql, [id], collback);
};
//validasi kelas
// const cekKelas = (id_kelas, collback) => {
//   const sql = `SELECT * FROM kelas WHERE id = ?`;
//   db.query(sql, [id_kelas], collback);
// };

module.exports = {
  getAll,
  tambahPelanggaran,
  cekSiswa,
  // cekKelas,
  getDetailAll,
};
