const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const {
    validateComplaint,
    checkValidation
} = require("../validators/complaintValidator");

const {
    createComplaint,
    getComplaints,
    updateComplaint,
    deleteComplaint
} = require("../controllers/complaintController");
// Logged-in users
router.post(
    "/",
    auth,
    validateComplaint,
    checkValidation,
    createComplaint
);

router.get("/", auth, getComplaints);

// Admin Only
router.put("/:id", auth, admin, updateComplaint);
router.delete("/:id", auth, admin, deleteComplaint);

module.exports = router;