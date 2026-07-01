const express = require("express");
const cors = require("cors");

const app = express();

// =============================
// Middleware
// =============================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =============================
// Import Routes
// =============================
const pumpRoutes = require("./routes/pumpRoutes");
const tankRoutes = require("./routes/tankRoutes");
const saleRoutes = require("./routes/saleRoutes");

// =============================
// Home Route
// =============================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Fuel Station AI Management System API",
    version: "1.0.0",
  });
});

// =============================
// API Routes
// =============================
app.use("/api/pumps", pumpRoutes);
app.use("/api/tanks", tankRoutes);
app.use("/api/sales", saleRoutes);

// =============================
// 404 Route
// =============================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = app;