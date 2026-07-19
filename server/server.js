const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const connectDB = require("./config/db");

const homeRoutes = require("./routes/homeRoutes");
const studentRoutes = require("./routes/studentRoutes");
const menuRoutes = require("./routes/menuRoutes");
const userRoutes = require("./routes/userRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const noticeRoutes = require("./routes/noticeRoutes");
const activityRoutes = require("./routes/activityRoutes");

const app = express();

// ======================
// Middleware
// ======================
app.use(cors());

app.use(express.json());

// ======================
// Routes
// ======================
app.use("/", homeRoutes);
app.use("/students", studentRoutes);
app.use("/menu", menuRoutes);
app.use("/users", userRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/complaints", complaintRoutes);
app.use("/notices", noticeRoutes);
app.use("/activity", activityRoutes);

// ======================
// Global Error Handler
// ======================
app.use(errorHandler);

// ======================
// Database Connection
// ======================
connectDB();

// ======================
// Start Server
// ======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});