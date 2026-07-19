const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
    getActivities,
} = require("../controllers/activityController");

// Logged in users can view activities
router.get("/", auth, getActivities);

module.exports = router;