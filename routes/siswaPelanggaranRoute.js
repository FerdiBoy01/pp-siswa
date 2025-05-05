const express = require("express");
const router = express.Router();
const siswaPelanggaranController = require("../Controllers/siswaPelanggaranController");

router.get("/", siswaPelanggaranController.tampilSiswa);

module.exports = router;
