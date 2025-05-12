const db = require("../config/dbConfig");

//get data siswa
const getAllSiswa = (collback) => {
  const sql = `SELECT siswa. *, kelas.nama_kelas
  FROM siswa
  JOIN kelas ON siswa.id_kelas = kelas.id`;
  db.query(sql, collback);
};
//get siswa byId
const getSiswaById = (id, callback) => {
  db.query("SELECT * FROM siswa WHERE id = ?", [id], (err, result) => {
    if (err) return callback(err, null);
    callback(null, result);
  });
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

//cek semua kelas
const cekAllkelas = (collback) => {
  db.query("SELCET * FROM kelas", collback);
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
  getSiswaById,
  cekAllkelas,
};
