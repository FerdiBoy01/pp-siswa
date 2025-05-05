const db = require("../config/dbConfig");

const getAllKelas = (collback) => {
  const sql = "SELECT * FROM kelas";
  db.query(sql, collback);
};

module.exports = {
  getAllKelas,
};
