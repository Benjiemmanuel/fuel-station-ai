const aiService = require("../services/pythonAIService");

exports.predictFuel = async (req, res) => {
  try {
    const { day } = req.body;

    const prediction = await aiService.predictFuelDemand(day);

    res.status(200).json({
      success: true,
      prediction,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};