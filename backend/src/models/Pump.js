const mongoose = require("mongoose");

const pumpSchema = new mongoose.Schema(
  {
    // Pump Number
    pumpNumber: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },

    // Fuel Type
    fuelType: {
      type: String,
      required: true,
      enum: ["PMS", "AGO", "DPK"],
    },

    // Tank supplying this pump
    assignedTank: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tank",
      required: true,
    },

    // Pump Status
    status: {
      type: String,
      enum: ["Online", "Offline", "Maintenance"],
      default: "Offline",
    },

    // Current selling price
    pricePerLitre: {
      type: Number,
      required: true,
      min: 0,
    },

    // Meter reading (Total litres dispensed)
    currentReading: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Current flow rate (Litres/minute)
    flowRate: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Pump temperature
    temperature: {
      type: Number,
      default: 0,
    },

    // Is the pump active?
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pump", pumpSchema);