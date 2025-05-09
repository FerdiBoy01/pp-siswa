require("dotenv").config();
const mysql = require("mysql2");

const koneksi = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

koneksi.connect((err) => {
  if (err) {
    console.log("koneksi gagal : ", err.stack);
    return;
  }
  console.log("berhasil konek ke databse");
});

module.exports = koneksi;
