const express = require("express");
const router = express.Router();

const {
  getTankPrediction,
  getSalesForecast,
} = require("../controllers/aiController");

const { protect } = require("../middleware/authMiddleware");

// AI Predictions (protected)
router.get("/tank/:tankId", protect, getTankPrediction);
router.get("/sales-forecast", protect, getSalesForecast);

module.exports = router;