const { json } = require("express");
const siswaPelanggaranModel = require("../models/siswaPelanggaranModel");

const tampilSiswa = (req, res) => {
  siswaPelanggaranModel.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

module.exports = {
  tampilSiswa,
};
