const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema(
  {
    pump: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pump",
      required: true,
    },

    tank: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tank",
      required: true,
    },

    fuelType: {
      type: String,
      enum: ["PMS", "AGO", "DPK"],
      required: true,
    },

    litres: {
      type: Number,
      required: true,
      min: 0,
    },

    pricePerLitre: {
      type: Number,
      required: true,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    attendant: {
      type: String,
      default: "Unknown",
    },

    paymentMethod: {
      type: String,
      enum: ["Cash", "POS", "Transfer"],
      default: "Cash",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Sale", saleSchema);