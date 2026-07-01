const express = require("express");

const router = express.Router();

const {
  getSummary
} = require("../controllers/dashboardController");

const {
  protect
} = require("../middleware/authMiddleware");

const {
  authorizeRoles
} = require("../middleware/roleMiddleware");

// Dashboard Summary
router.get(
  "/summary",
  protect,
  authorizeRoles("Admin", "Manager"),
  getSummary
);

module.exports = router;