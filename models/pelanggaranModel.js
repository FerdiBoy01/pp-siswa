const db = require("../config/dbConfig");

//get pelanggaran
const getAll = (collback) => {
  const sql = `SELECT * FROM pelanggaran`;
  db.query(sql, collback);
};

//add pelanggaran
const addPelanggaran = (data, collback) => {
  const sql = `INSERT INTO pelanggaran
    (nama_pelanggaran, poin) VALUES (?, ?)`;
  db.query(sql, data, collback);
};

module.exports = {
  getAll,
  addPelanggaran,
};
