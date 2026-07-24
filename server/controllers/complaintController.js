const Complaint = require("../models/Complaint");
const Student = require("../models/Student");
const AppError = require("../utils/AppError");
const logActivity = require("../utils/activityLogger");

// ==========================
// Create Complaint
// ==========================
const createComplaint = async (req, res, next) => {
    try {

        // Find the student using logged in user's email
        const student = await Student.findOne({
            email: req.user.email
        });

        if (!student) {
            return next(new AppError("Student not found", 404));
        }

        const complaint = await Complaint.create({
            student: student._id,
            title: req.body.title,
            description: req.body.description,
            category: req.body.category
        });

        await logActivity(
            "Complaint Submitted",
            `${student.name} submitted a complaint.`,
            "Complaint",
            "alert"
        );

        res.status(201).json({
            success: true,
            message: "Complaint submitted successfully",
            data: complaint
        });

    } catch (error) {
        next(error);
    }
};

// ==========================
// Get Complaints
// ==========================
const getComplaints = async (req, res, next) => {
    try {

        const complaints = await Complaint.find()
            .populate("student");

        res.status(200).json({
            success: true,
            count: complaints.length,
            data: complaints
        });

    } catch (error) {
        next(error);
    }
};

// ==========================
// Update Complaint
// ==========================
const updateComplaint = async (req, res, next) => {
    try {

        const complaint = await Complaint.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!complaint) {
            return next(new AppError("Complaint not found", 404));
        }

        await logActivity(
            "Complaint Updated",
            `Complaint status changed to "${complaint.status}".`,
            "Complaint",
            "edit"
        );

        res.status(200).json({
            success: true,
            message: "Complaint updated successfully",
            data: complaint
        });

    } catch (error) {
        next(error);
    }
};

// ==========================
// Delete Complaint
// ==========================
const deleteComplaint = async (req, res, next) => {
    try {

        const complaint = await Complaint.findByIdAndDelete(req.params.id);

        if (!complaint) {
            return next(new AppError("Complaint not found", 404));
        }

        await logActivity(
            "Complaint Deleted",
            "A complaint has been deleted.",
            "Complaint",
            "delete"
        );

        res.status(200).json({
            success: true,
            message: "Complaint deleted successfully"
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createComplaint,
    getComplaints,
    updateComplaint,
    deleteComplaint
};