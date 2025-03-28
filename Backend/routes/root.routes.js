const express = require("express");
const router = express.Router();
const rootController = require("../controllers/root.controllers");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/register", rootController.register);

router.post("/login", rootController.login);

router.post("/profile", rootController.profile);

module.exports = router;
