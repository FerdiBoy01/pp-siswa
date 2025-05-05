const express = require("express");
const router = express.Router();
const kelasController = require("../Controllers/kelasController");

router.get("/", kelasController.getKelas);

module.exports = router;
