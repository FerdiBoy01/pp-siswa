const express = require("express");
const router = express.Router();
const guruController = require("../Controllers/guruController");

router.get("/", guruController.tampiLGuru);
router.post("/", express.json(), guruController.tambahGuru);
router.put("/:id", guruController.editGuru);
router.delete("/:id", guruController.hapusGuru);

module.exports = router;
