// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// DB Connection
connectDB();

// App init
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to CampusHub API");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const clubRoutes = require("./routes/clubRoutes");
app.use("/api/club", clubRoutes);

const eventRoutes = require("./routes/eventRoutes");
app.use("/api/club", eventRoutes);
