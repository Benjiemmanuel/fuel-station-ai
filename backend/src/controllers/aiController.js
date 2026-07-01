const aiService = require("../services/aiService");

// ===============================
// TANK LIFE PREDICTION
// ===============================
exports.getTankPrediction = async (req, res) => {
  try {
    const result = await aiService.estimateTankLife(req.params.tankId);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// DAILY SALES FORECAST
// ===============================
exports.getSalesForecast = async (req, res) => {
  try {
    const result = await aiService.predictDailySales();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};