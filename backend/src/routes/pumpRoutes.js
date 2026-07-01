const express = require("express");
const router = express.Router();

const {
  createPump,
  getAllPumps,
  getPumpById,
  updatePump,
  deletePump,
} = require("../controllers/pumpController");

router.post("/", createPump);
router.get("/", getAllPumps);
router.get("/:id", getPumpById);
router.put("/:id", updatePump);
router.delete("/:id", deletePump);

module.exports = router;