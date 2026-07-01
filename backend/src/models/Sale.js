const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema(
  {
    // Receipt Number
    receiptNumber: {
      type: String,
      required: true,
      unique: true,
    },

    // Pump Used
    pump: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pump",
      required: true,
    },

    // Tank Used
    tank: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tank",
      required: true,
    },

    // Cashier
    cashier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Fuel Type
    fuelType: {
      type: String,
      required: true,
      enum: ["PMS", "AGO", "DPK"],
    },

    // Litres Sold
    litres: {
      type: Number,
      required: true,
      min: 0,
    },

    // Selling Price Per Litre
    pricePerLitre: {
      type: Number,
      required: true,
      min: 0,
    },

    // Total Amount
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    // Payment Method
    paymentMethod: {
      type: String,
      enum: ["Cash", "POS", "Transfer", "Credit"],
      default: "Cash",
    },

    // Customer Name (Optional)
    customerName: {
      type: String,
      default: "",
    },

    // Vehicle Number (Optional)
    vehicleNumber: {
      type: String,
      default: "",
    },

    // Vehicle Type
    vehicleType: {
      type: String,
      default: "",
    },

    // Sales Status
    status: {
      type: String,
      enum: ["Completed", "Cancelled", "Pending"],
      default: "Completed",
    },

    // Remarks
    remarks: {
      type: String,
      default: "",
    },

    // Is Active?
    isActive: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Sale", saleSchema);