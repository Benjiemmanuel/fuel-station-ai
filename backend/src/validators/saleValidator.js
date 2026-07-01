const { body, validationResult } = require("express-validator");

// Validation Rules
exports.saleValidation = [
  body("pump")
    .notEmpty()
    .withMessage("Pump is required"),

  body("cashier")
    .notEmpty()
    .withMessage("Cashier is required"),

  body("litres")
    .isFloat({ gt: 0 })
    .withMessage("Litres must be greater than 0"),

  body("paymentMethod")
    .optional()
    .isIn(["Cash", "POS", "Transfer", "Credit"])
    .withMessage("Invalid payment method"),
];

// Handle Validation Errors
exports.validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  next();
};