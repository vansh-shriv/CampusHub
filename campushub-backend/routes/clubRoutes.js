// routes/clubRoutes.js
const express = require("express");
const router = express.Router();
const { getClubDashboard } = require("../controllers/clubController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

// @route   GET /api/club/dashboard
// @access  Protected (only for 'club' role)
router.get("/dashboard", protect, authorizeRoles("club"), getClubDashboard);

module.exports = router;
