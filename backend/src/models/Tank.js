const mongoose = require("mongoose");

const tankSchema = new mongoose.Schema(
  {
    // Tank Number
    tankNumber: {
      type: Number,
      required: true,
      unique: true,
    },

    // Fuel Type
    fuelType: {
      type: String,
      required: true,
      enum: ["PMS", "AGO", "DPK"],
    },

    // Maximum tank capacity (Litres)
    capacity: {
      type: Number,
      required: true,
      min: 0,
    },

    // Current fuel level (Litres)
    currentLevel: {
      type: Number,
      required: true,
      min: 0,
    },

    // Low fuel alert threshold
    minimumLevel: {
      type: Number,
      required: true,
      default: 5000,
    },

    // Fuel temperature
    temperature: {
      type: Number,
      default: 25,
    },

    // Water contamination level
    waterLevel: {
      type: Number,
      default: 0,
    },

    // Tank status
    status: {
      type: String,
      enum: ["Active", "Maintenance", "Offline"],
      default: "Active",
    },

    // ESP32 Device ID
    deviceId: {
      type: String,
      default: "",
    },

    // Sensor status
    sensorStatus: {
      type: String,
      enum: ["Online", "Offline"],
      default: "Offline",
    },

    // Last time sensor reported
    lastSensorUpdate: {
      type: Date,
      default: Date.now,
    },

    // Tank location
    location: {
      type: String,
      default: "",
    },

    // Tank description
    description: {
      type: String,
      default: "",
    },

    // Is tank active?
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tank", tankSchema);