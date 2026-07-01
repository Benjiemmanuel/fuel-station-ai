const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Routes
const pumpRoutes = require("./routes/pumpRoutes");
const statusRoutes = require("./routes/statusRoutes")

app.use("/api/pumps", pumpRoutes);
app.use("/api/status", statusRoutes)

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Fuel Station AI Management System");
});

module.exports = app;