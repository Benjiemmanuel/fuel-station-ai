const Tank = require("../models/Tank");

// Create Tank
exports.createTank = async (req, res) => {
  try {
    const tank = await Tank.create(req.body);

    res.status(201).json({
      success: true,
      message: "Tank created successfully",
      data: tank,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Tanks
exports.getAllTanks = async (req, res) => {
  try {
    const tanks = await Tank.find();

    res.status(200).json({
      success: true,
      count: tanks.length,
      data: tanks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Tank By ID
exports.getTankById = async (req, res) => {
  try {
    const tank = await Tank.findById(req.params.id);

    if (!tank) {
      return res.status(404).json({
        success: false,
        message: "Tank not found",
      });
    }

    res.status(200).json({
      success: true,
      data: tank,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Tank
exports.updateTank = async (req, res) => {
  try {
    const tank = await Tank.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!tank) {
      return res.status(404).json({
        success: false,
        message: "Tank not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Tank updated successfully",
      data: tank,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Tank
exports.deleteTank = async (req, res) => {
  try {
    const tank = await Tank.findByIdAndDelete(req.params.id);

    if (!tank) {
      return res.status(404).json({
        success: false,
        message: "Tank not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Tank deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};