const asyncHandler = require("express-async-handler");
const Pump = require("../models/Pump");

// ======================================
// Create Pump
// ======================================
exports.createPump = asyncHandler(async (req, res) => {
  const pump = await Pump.create(req.body);

  res.status(201).json({
    success: true,
    message: "Pump created successfully",
    data: pump,
  });
});

// ======================================
// Get All Pumps
// ======================================
exports.getAllPumps = asyncHandler(async (req, res) => {
  const pumps = await Pump.find().populate("assignedTank");

  res.status(200).json({
    success: true,
    count: pumps.length,
    data: pumps,
  });
});

// ======================================
// Get Pump By ID
// ======================================
exports.getPumpById = asyncHandler(async (req, res) => {
  const pump = await Pump.findById(req.params.id).populate("assignedTank");

  if (!pump) {
    res.status(404);
    throw new Error("Pump not found");
  }

  res.status(200).json({
    success: true,
    data: pump,
  });
});

// ======================================
// Update Pump
// ======================================
exports.updatePump = asyncHandler(async (req, res) => {
  const pump = await Pump.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!pump) {
    res.status(404);
    throw new Error("Pump not found");
  }

  res.status(200).json({
    success: true,
    message: "Pump updated successfully",
    data: pump,
  });
});

// ======================================
// Delete Pump
// ======================================
exports.deletePump = asyncHandler(async (req, res) => {
  const pump = await Pump.findByIdAndDelete(req.params.id);

  if (!pump) {
    res.status(404);
    throw new Error("Pump not found");
  }

  res.status(200).json({
    success: true,
    message: "Pump deleted successfully",
  });
});