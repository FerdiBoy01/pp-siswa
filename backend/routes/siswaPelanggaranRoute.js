const express = require("express");
const router = express.Router();
const siswaPelanggaranController = require("../Controllers/siswaPelanggaranController");

router.get("/", siswaPelanggaranController.tampilSiswa);
router.post("/", express.json(), siswaPelanggaranController.tambahSiswaP);

module.exports = router;
