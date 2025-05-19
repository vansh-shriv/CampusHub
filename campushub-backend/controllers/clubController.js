// controllers/clubController.js

exports.getClubDashboard = (req, res) => {
  res.status(200).json({
    message: `Welcome to the club dashboard, ${req.user.name}`,
    club: req.user,
    dashboardData: {
      eventsCount: 5,
      upcomingEvents: ["Hackathon", "Workshop"],
    },
  });
};
