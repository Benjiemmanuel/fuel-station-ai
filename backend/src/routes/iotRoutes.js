const express = require("express");
const router = express.Router();

const { updateTankSensor } = require("../controllers/iotController");

// ESP32 sends data here
router.post("/tank-data", updateTankSensor);

module.exports = router;