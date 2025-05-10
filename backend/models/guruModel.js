const db = require("../config/dbConfig");
const { add } = require("./siswaModel");

const getAll = (collback) => {
  const sql = `SELECT * FROM guru`;
  db.query(sql, collback);
};

//add guru
const addGuru = (data, collback) => {
  const sql = `INSERT INTO guru (nama, nip, no_telp, email ) VALUES (?, ?, ?, ?)`;
  db.query(sql, data, collback);
};

//edit guru
const updateGuru = (data, id, collback) => {
  const sql = `UPDATE guru SET nama = ?, nip = ?, no_telp = ?, email = ? WHERE id = ?`;
  db.query(sql, [...data, id], collback);
};

//delet guru
const deleteGuru = (id, collback) => {
  const sql = `DELETE FROM guru WHERE id = ?`;
  db.query(sql, [id], collback);
};

module.exports = {
  getAll,
  addGuru,
  updateGuru,
  deleteGuru,
};
