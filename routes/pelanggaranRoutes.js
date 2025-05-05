const express = require("express");
const router = express.Router();
const pelanggaranController = require("../Controllers/pelanggaranController");

router.get("/", pelanggaranController.getpelanggaran);
router.post("/", pelanggaranController.tambahPelanggaran);

module.exports = router;
