// routes/eventRoutes.js
const express = require("express");
const router = express.Router();
const { createEvent } = require("../controllers/eventController");
const { protect, authorizeRoles } = require("../middlewares/authMiddleware");

// @route   POST /api/club/events
// @access  Protected (club only)
router.post("/events", protect, authorizeRoles("club"), createEvent);

// @route   GET /api/club/events
// @access  Protected (club only)
router.get("/events", protect, authorizeRoles("club"), getClubEvents);

module.exports = router;
