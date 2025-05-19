// routes/clubRoutes.js
const express = require("express");
const router = express.Router();
const { getClubDashboard } = require("../controllers/clubController.js");
const { protect, authorizeRoles } = require("../middlewares/authMiddleware.js");

// @route   GET /api/club/dashboard
// @access  Protected (only for 'club' role)
router.get("/dashboard", protect, authorizeRoles("club"), getClubDashboard);

module.exports = router;
