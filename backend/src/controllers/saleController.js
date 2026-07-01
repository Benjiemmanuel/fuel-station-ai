const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const Sale = require("../models/Sale");
const Pump = require("../models/Pump");
const Tank = require("../models/Tank");

// ======================================
// Generate Receipt Number
// ======================================
const generateReceiptNumber = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const random = Math.floor(1000 + Math.random() * 9000);

  return `FS-${year}${month}${day}-${random}`;
};

// ======================================
// Create Sale
// ======================================
exports.createSale = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const {
      pump,
      cashier,
      litres,
      paymentMethod,
      customerName,
      vehicleNumber,
      vehicleType,
      remarks,
    } = req.body;

    // Find Pump
    const selectedPump = await Pump.findById(pump).session(session);

    if (!selectedPump) {
      throw new Error("Pump not found");
    }

    // Find Assigned Tank
    const tank = await Tank.findById(selectedPump.assignedTank).session(session);

    if (!tank) {
      throw new Error("Assigned tank not found");
    }

    // Check fuel availability
    if (tank.currentLevel < litres) {
      throw new Error("Insufficient fuel in tank");
    }

    // Calculate amount
    const totalAmount = litres * selectedPump.pricePerLitre;

    // Create sale
    const sale = await Sale.create(
      [
        {
          receiptNumber: generateReceiptNumber(),
          pump: selectedPump._id,
          tank: tank._id,
          cashier,
          fuelType: selectedPump.fuelType,
          litres,
          pricePerLitre: selectedPump.pricePerLitre,
          totalAmount,
          paymentMethod,
          customerName,
          vehicleNumber,
          vehicleType,
          remarks,
        },
      ],
      { session }
    );

    // Reduce tank fuel
    tank.currentLevel -= litres;
    await tank.save({ session });

    // Increase pump meter
    selectedPump.currentReading += litres;
    await selectedPump.save({ session });

    // Commit transaction
    await session.commitTransaction();

    res.status(201).json({
      success: true,
      message: "Sale completed successfully",
      data: sale[0],
    });

  } catch (error) {

    await session.abortTransaction();

    res.status(500).json({
      success: false,
      message: error.message,
    });

  } finally {

    session.endSession();

  }
});

// ======================================
// Get All Sales
// ======================================
exports.getAllSales = asyncHandler(async (req, res) => {
  const sales = await Sale.find()
    .populate("pump")
    .populate("tank")
    .populate("cashier");

  res.status(200).json({
    success: true,
    count: sales.length,
    data: sales,
  });
});

// ======================================
// Get Sale By ID
// ======================================
exports.getSaleById = asyncHandler(async (req, res) => {
  const sale = await Sale.findById(req.params.id)
    .populate("pump")
    .populate("tank")
    .populate("cashier");

  if (!sale) {
    res.status(404);
    throw new Error("Sale not found");
  }

  res.status(200).json({
    success: true,
    data: sale,
  });
});

// ======================================
// Delete Sale
// ======================================
exports.deleteSale = asyncHandler(async (req, res) => {
  const sale = await Sale.findById(req.params.id);

  if (!sale) {
    res.status(404);
    throw new Error("Sale not found");
  }

  await Sale.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Sale deleted successfully",
  });
});