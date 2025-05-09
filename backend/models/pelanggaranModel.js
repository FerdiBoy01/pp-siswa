const db = require("../config/dbConfig");

//get pelanggaran
const getAll = (collback) => {
  const sql = `SELECT * FROM pelanggaran WHERE is_active = TRUE`;
  db.query(sql, collback);
};

//FIND pelanggaran
const findById = (id, collback) => {
  const sql = `SELECT * FROM pelanggaran WHERE id = ? AND is_active = TRUE`;
  db.query(sql, [id], collback);
};

//add pelanggaran
const addPelanggaran = (data, collback) => {
  const sql = `INSERT INTO pelanggaran
    (nama_pelanggaran, poin) VALUES (?, ?)`;
  db.query(sql, data, collback);
};

//update pealanggaran
const update = (data, id, collback) => {
  const sql = `UPDATE pelanggaran SET 
  nama_pelanggaran = ?, poin = ? WHERE id = ?`;
  db.query(sql, [...data, id], collback);
};

//delet pelanggaran
const deletPelanggaran = (id, collback) => {
  const sql = `UPDATE pelanggaran SET is_active = FALSE WHERE id = ?`;
  db.query(sql, [id], collback);
};

module.exports = {
  getAll,
  findById,
  addPelanggaran,
  update,
  deletPelanggaran,
};
