const express = require("express");
const router = express.Router();
const siswaController = require("../Controllers/siswaController"); // ← tambahkan ini!

router.get("/", siswaController.getSiswa);
router.get("/:id", siswaController.getSiswaById);
router.get("/", siswaController.getAllkelas);
router.post("/", express.json(), siswaController.tambahSiswa);
router.put("/:id", siswaController.editSiswa);
router.delete("/:id", siswaController.hapusSiswa);
router.get("/rekap", siswaController.getRekapPelanggaran);

module.exports = router;
