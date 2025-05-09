const db = require("../config/dbConfig");

//get data siswa
const getAllSiswa = (collback) => {
  const sql = "SELECT * FROM siswa";
  db.query(sql, collback);
};

//rekap point sisa
const getRekapPelanggaran = (callback) => {
  const sql = `
    SELECT 
      s.id,
      s.nama,
      COUNT(sp.id) AS jumlah_pelanggaran,
      COALESCE(SUM(p.poin), 0) AS total_poin
    FROM siswa s
    LEFT JOIN siswa_pelanggaran sp ON s.id = sp.siswa_id
    LEFT JOIN pelanggaran p ON sp.pelanggaran_id = p.id
    GROUP BY s.id, s.nama
  `;
  db.query(sql, callback);
};

//tambah siswa
const add = (data, collback) => {
  const sql = `INSERT INTO siswa
    (nama, nisn, id_kelas, no_hp, alamat, jenis_kelamin, tanggal_lahir)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(sql, data, collback);
};
//cek kelas
const cekKelas = (id_kelas, collback) => {
  const sql = `SELECT * FROM kelas WHERE id = ?`;
  db.query(sql, [id_kelas], collback);
};

// Edit siswa
const update = (data, id, callback) => {
  const sql = `UPDATE siswa SET 
      nama = ?, nisn = ?, id_kelas = ?, no_hp = ?, alamat = ?, jenis_kelamin = ?, tanggal_lahir = ?
      WHERE id = ?`;
  db.query(sql, [...data, id], callback);
};

//hapus siswa
const deleteSiswa = (id, collback) => {
  const sql = `DELETE FROM siswa WHERE id = ?`;
  db.query(sql, [id], collback);
};

module.exports = {
  getAllSiswa,
  cekKelas,
  add,
  update,
  deleteSiswa,
  getRekapPelanggaran,
};
