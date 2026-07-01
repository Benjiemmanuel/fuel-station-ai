const Sale = require("../models/Sale");
const Pump = require("../models/Pump");
const Tank = require("../models/Tank");

// Create Sale
exports.createSale = async (req, res) => {
  try {
    const { pumpId, litres, paymentMethod, attendant } = req.body;

    // Find Pump
    const pump = await Pump.findById(pumpId).populate("assignedTank");

    if (!pump) {
      return res.status(404).json({
        success: false,
        message: "Pump not found",
      });
    }

    const tank = pump.assignedTank;

    if (!tank) {
      return res.status(400).json({
        success: false,
        message: "No tank assigned to this pump",
      });
    }

    // Check fuel availability
    if (tank.currentLevel < litres) {
      return res.status(400).json({
        success: false,
        message: "Not enough fuel in tank",
      });
    }

    // Calculate amount
    const totalAmount = litres * pump.pricePerLitre;

    // Reduce tank level
    tank.currentLevel -= litres;

    await tank.save();

    // Save sale
    const sale = await Sale.create({
      pump: pump._id,
      tank: tank._id,
      fuelType: pump.fuelType,
      litres,
      pricePerLitre: pump.pricePerLitre,
      totalAmount,
      paymentMethod,
      attendant,
    });

    res.status(201).json({
      success: true,
      message: "Sale completed successfully",
      data: sale,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};