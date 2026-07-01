const mongoose = require("mongoose");

const pumpSchema = new mongoose.Schema(
  {
    pumpNumber: {
      type: Number,
      required: true,
      unique: true,
    },

    fuelType: {
      type: String,
      required: true,
      enum: ["PMS", "AGO", "DPK"],
    },

    status: {
      type: String,
      enum: ["Online", "Offline", "Maintenance"],
      default: "Offline",
    },

    pricePerLitre: {
      type: Number,
      required: true,
      min: 0,
    },

    currentReading: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },

    flowRate: {
      type: Number,
      default: 0,
    },

    temperature: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Pump = mongoose.model("Pump", pumpSchema);

module.exports = Pump;