const { body, validationResult } = require("express-validator");

// Validation rules
exports.pumpValidation = [
  body("pumpNumber")
    .notEmpty()
    .withMessage("Pump number is required"),

  body("fuelType")
    .isIn(["PMS", "AGO", "DPK"])
    .withMessage("Fuel type must be PMS, AGO, or DPK"),

  body("pricePerLitre")
    .isFloat({ gt: 0 })
    .withMessage("Price per litre must be greater than 0"),

  body("assignedTank")
    .notEmpty()
    .withMessage("Assigned tank is required"),
];

// Handle validation errors
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