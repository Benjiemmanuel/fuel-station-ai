const mongoose = require("mongoose");

const tankSchema = new mongoose.Schema(
  {
    tankNumber: {
      type: Number,
      required: true,
      unique: true,
    },

    fuelType: {
      type: String,
      required: true,
      enum: ["PMS", "AGO", "DPK"],
    },

    capacity: {
      type: Number,
      required: true,
      min: 0,
    },

    currentLevel: {
      type: Number,
      required: true,
      min: 0,
    },

    minimumLevel: {
      type: Number,
      required: true,
      default: 5000,
    },

    temperature: {
      type: Number,
      default: 25,
    },

    waterLevel: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["Active", "Maintenance", "Offline"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tank", tankSchema);