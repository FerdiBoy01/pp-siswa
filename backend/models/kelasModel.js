const db = require("../config/dbConfig");

//ambil data kelas
const getAllKelas = (collback) => {
  const sql = "SELECT * FROM kelas";
  db.query(sql, collback);
};

//add data kelas ke data base
const addKelas = (data, collback) => {
  const sql = `INSERT INTO kelas (nama_kelas) VALUES (?)`;
  db.query(sql, data, collback);
};

//editk kelas
const updateKlas = (data, id, collback) => {
  const sql = `UPDATE kelas SET 
  nama_kelas = ? WHERE id = ?`;
  db.query(sql, [...data, id], collback);
};

//delet kelas

const deleteKelas = (id, collback) => {
  const sql = `DELETE FROM kelas WHERE id = ?`;
  db.query(sql, [id], collback);
};

//jangan lupa export
module.exports = {
  getAllKelas,
  addKelas,
  updateKlas,
  deleteKelas,
};
