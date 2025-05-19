// controllers/eventController.js
const Event = require("../models/Event");

// @desc    Create a new event
// @route   POST /api/club/events
// @access  Protected (club only)
exports.createEvent = async (req, res) => {
  try {
    const { name, description, date, venue } = req.body;

    if (!name || !date || !venue) {
      return res.status(400).json({ message: "Name, date, and venue are required." });
    }

    const event = await Event.create({
      name,
      description,
      date,
      venue,
      createdBy: req.user._id,
    });

    res.status(201).json({ message: "Event created successfully", event });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
