const express = require("express");
const router = express.Router();

const { predictFuel } = require("../controllers/mlController");
const { protect } = require("../middleware/authMiddleware");

// Protected prediction endpoint
router.post("/predict", protect, predictFuel);

module.exports = router;