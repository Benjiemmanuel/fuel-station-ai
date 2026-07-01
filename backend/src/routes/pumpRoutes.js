const express = require("express");
const router = express.Router();

const {
  createPump,
  getAllPumps,
  getPumpById,
  updatePump,
  deletePump,
} = require("../controllers/pumpController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

const {
  pumpValidation,
  validate,
} = require("../validators/pumpValidator");

// Create Pump
router.post(
  "/",
  protect,
  authorizeRoles("Admin"),
  pumpValidation,
  validate,
  createPump
);

// Get all pumps
router.get(
  "/",
  protect,
  getAllPumps
);

// Get single pump
router.get(
  "/:id",
  protect,
  getPumpById
);

// Update pump
router.put(
  "/:id",
  protect,
  authorizeRoles("Admin"),
  pumpValidation,
  validate,
  updatePump
);

// Delete pump
router.delete(
  "/:id",
  protect,
  authorizeRoles("Admin"),
  deletePump
);

module.exports = router;