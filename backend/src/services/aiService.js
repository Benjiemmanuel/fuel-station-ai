const Sale = require("../models/Sale");
const Tank = require("../models/Tank");

// ===============================
// DAILY CONSUMPTION ANALYSIS
// ===============================
exports.getFuelConsumptionRate = async () => {
  const sales = await Sale.find();

  const totalLitres = sales.reduce((sum, sale) => sum + sale.litres, 0);

  const days = Math.max(
    1,
    Math.ceil(
      (new Date() - new Date(sales[0]?.createdAt || new Date())) /
        (1000 * 60 * 60 * 24)
    )
  );

  return totalLitres / days;
};

// ===============================
// ESTIMATE TANK DEPLETION TIME
// ===============================
exports.estimateTankLife = async (tankId) => {
  const tank = await Tank.findById(tankId);

  if (!tank) return null;

  const consumptionRate = await exports.getFuelConsumptionRate();

  if (consumptionRate === 0) {
    return {
      message: "Not enough data for prediction",
    };
  }

  const daysLeft = tank.currentLevel / consumptionRate;

  return {
    tankId,
    currentLevel: tank.currentLevel,
    consumptionRatePerDay: consumptionRate,
    estimatedDaysLeft: Math.floor(daysLeft),
  };
};

// ===============================
// DAILY SALES FORECAST
// ===============================
exports.predictDailySales = async () => {
  const sales = await Sale.find();

  const totalRevenue = sales.reduce(
    (sum, sale) => sum + sale.totalAmount,
    0
  );

  const days = Math.max(
    1,
    new Date().getDate()
  );

  return {
    averageDailyRevenue: totalRevenue / days,
  };
};