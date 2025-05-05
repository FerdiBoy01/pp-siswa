const db = require("../config/dbConfig");

const getAllKelas = (collback) => {
  const sql = "SELECT * FROM kelas";
  db.query(sql, collback);
};

const addKelas = (data, collback) => {
  const sql = `INSERT INTO kelas (nama_kelas) VALUES (?)`;
  db.query(sql, data, collback);
};

module.exports = {
  getAllKelas,
  addKelas,
};
