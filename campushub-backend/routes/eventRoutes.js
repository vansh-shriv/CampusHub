// routes/eventRoutes.js
const express = require("express");
const router = express.Router();
const { createEvent } = require("../controllers/eventController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

// @route   POST /api/club/events
// @access  Protected (club only)
router.post("/events", protect, authorizeRoles("club"), createEvent);

module.exports = router;
