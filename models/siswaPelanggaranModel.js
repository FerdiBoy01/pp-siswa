const db = require("../config/dbConfig");

const getAll = (collback) => {
  const sql = `SELECT * FROM siswa_pelanggaran`;
  db.query(sql, collback);
};

module.exports = {
  getAll,
};
