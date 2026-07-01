const express = require("express");
const router = express.Router();

const {
  createSale,
  getAllSales,
  getSaleById,
  deleteSale,
} = require("../controllers/saleController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

const {
  saleValidation,
  validate,
} = require("../validators/saleValidator");

// ======================================
// Create Sale
// Admin, Manager, Cashier
// ======================================
router.post(
  "/",
  protect,
  authorizeRoles("Admin", "Manager", "Cashier"),
  saleValidation,
  validate,
  createSale
);

// ======================================
// Get All Sales
// ======================================
router.get(
  "/",
  protect,
  authorizeRoles("Admin", "Manager"),
  getAllSales
);

// ======================================
// Get Single Sale
// ======================================
router.get(
  "/:id",
  protect,
  authorizeRoles("Admin", "Manager"),
  getSaleById
);

// ======================================
// Delete Sale
// Admin Only
// ======================================
router.delete(
  "/:id",
  protect,
  authorizeRoles("Admin"),
  deleteSale
);

module.exports = router;