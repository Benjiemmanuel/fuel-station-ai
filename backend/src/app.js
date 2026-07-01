const express = require("express");
const cors = require("cors");

const errorHandler = require("./middleware/errorMiddleware");

const authRoutes = require("./routes/authRoutes");
const pumpRoutes = require("./routes/pumpRoutes");
const tankRoutes = require("./routes/tankRoutes");
const saleRoutes = require("./routes/saleRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const iotRoutes = require("./routes/iotRoutes");
const aiRoutes = require("./routes/aiRoutes");
const mlRoutes = require("./routes/mlRoutes");

const app = express();

// ======================================
// Middlewares
// ======================================
app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// ======================================
// Home Route
// ======================================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Fuel Station AI Management System API",
    version: "1.0.0",
    author: "Benjamin Emmanuel",
    status: "Running",
  });
});

// ======================================
// API Routes
// ======================================
app.use("/api/auth", authRoutes);

app.use("/api/pumps", pumpRoutes);

app.use("/api/tanks", tankRoutes);

app.use("/api/sales", saleRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/iot", iotRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/ml", mlRoutes);

// ======================================
// 404 Route
// ======================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// ======================================
// Global Error Handler
// ======================================
app.use(errorHandler);

module.exports = app;