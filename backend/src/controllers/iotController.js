const Tank = require("../models/Tank");

// ============================
// RECEIVE ESP32 SENSOR DATA
// ============================
exports.updateTankSensor = async (req, res) => {
  try {
    const { tankId, fuelLevel, temperature, waterLevel } = req.body;

    // Find tank
    const tank = await Tank.findById(tankId);

    if (!tank) {
      return res.status(404).json({
        success: false,
        message: "Tank not found",
      });
    }

    // Update sensor values
    tank.currentLevel = fuelLevel ?? tank.currentLevel;
    tank.temperature = temperature ?? tank.temperature;
    tank.waterLevel = waterLevel ?? tank.waterLevel;

    await tank.save();

    // Check low fuel alert
    let alert = null;

    if (tank.currentLevel <= tank.minimumLevel) {
      alert = "LOW FUEL ALERT 🚨";
    }

    res.status(200).json({
      success: true,
      message: "Tank updated from sensor data",
      alert,
      data: tank,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};