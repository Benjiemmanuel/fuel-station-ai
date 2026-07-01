const express = require("express");

const router = express.Router();

const { getPumps } = require("../controllers/pumpController");

router.get("/", getPumps);

module.exports = router;