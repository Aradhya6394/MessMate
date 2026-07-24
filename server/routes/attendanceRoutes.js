const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const {
    markAttendance,
    getAttendance
} = require("../controllers/attendanceController");

// Everyone can view attendance
router.get("/", auth, getAttendance);

// Only admin can save attendance
router.post("/", auth, admin, markAttendance);

module.exports = router;