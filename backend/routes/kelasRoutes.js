const express = require("express");
const router = express.Router();
const kelasController = require("../Controllers/kelasController");

//buat routs nya
router.get("/", kelasController.getKelas);
router.post("/", express.json(), kelasController.tambahKelas);
router.put("/:id", kelasController.editKelas);
router.delete("/:id", kelasController.hapusKelas);

module.exports = router;
