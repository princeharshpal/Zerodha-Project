const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controllers")

router.get("/allholdings", dashboardController.getAllHoldings);

router.get("/allpositions", dashboardController.getAllPositions);

router.get("/fetch-orders", dashboardController.fetchOrder);

router.post("/new-order", dashboardController.newOrder);

module.exports = router;
