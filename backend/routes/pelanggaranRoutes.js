const express = require("express");
const router = express.Router();
const pelanggaranController = require("../Controllers/pelanggaranController");

router.get("/", pelanggaranController.getpelanggaran);
router.post("/", pelanggaranController.tambahPelanggaran);
router.put("/:id", pelanggaranController.editPelanggaran);
router.delete("/:id", pelanggaranController.hapusPelanggaran);
module.exports = router;
