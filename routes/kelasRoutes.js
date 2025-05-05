const express = require("express");
const router = express.Router();
const kelasController = require("../Controllers/kelasController");

router.get("/", kelasController.getKelas);
router.post("/", express.json(), kelasController.tambahKelas);

module.exports = router;
