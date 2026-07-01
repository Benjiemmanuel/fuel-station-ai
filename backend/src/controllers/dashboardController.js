const asyncHandler = require("express-async-handler");

const Sale = require("../models/Sale");
const Pump = require("../models/Pump");
const Tank = require("../models/Tank");
const User = require("../models/User");

// ===============================
// Dashboard Summary
// ===============================
exports.getSummary = asyncHandler(async (req, res) => {
  // Start of today
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Today's sales
  const todaySales = await Sale.find({
    createdAt: { $gte: today },
  });

  const todayRevenue = todaySales.reduce(
    (sum, sale) => sum + sale.totalAmount,
    0
  );

  // Total revenue
  const allSales = await Sale.find();

  const totalRevenue = allSales.reduce(
    (sum, sale) => sum + sale.totalAmount,
    0
  );

  // Counts
  const totalSales = await Sale.countDocuments();

  const totalPumps = await Pump.countDocuments();

  const activePumps = await Pump.countDocuments({
    status: "Online",
  });

  const totalTanks = await Tank.countDocuments();

  const lowFuelTanks = await Tank.countDocuments({
    $expr: {
      $lte: ["$currentLevel", "$minimumLevel"],
    },
  });

  const totalCashiers = await User.countDocuments({
    role: "Cashier",
  });

  res.status(200).json({
    success: true,
    data: {
      todayRevenue,
      totalRevenue,
      todaySales: todaySales.length,
      totalSales,
      totalPumps,
      activePumps,
      totalTanks,
      lowFuelTanks,
      totalCashiers,
    },
  });
});