const Attendance = require("../models/Attendance");
const AppError = require("../utils/AppError");
const logActivity = require("../utils/activityLogger");

// Mark Attendance
const markAttendance = async (req, res, next) => {
    try {

        const attendance = await Attendance.insertMany(req.body);

        await logActivity(
            "Attendance Marked",
            `${attendance.length} students' attendance has been marked.`,
            "Attendance",
            "calendar"
        );

        res.status(201).json({
            success: true,
            message: "Attendance saved successfully",
            data: attendance
        });

    } catch (error) {
        next(error);
    }
};

// Get All Attendance
const getAttendance = async (req, res, next) => {
    try {

        const attendance = await Attendance.find().populate("student");

        res.status(200).json({
            success: true,
            count: attendance.length,
            data: attendance
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    markAttendance,
    getAttendance
};