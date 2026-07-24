const Attendance = require("../models/Attendance");
const AppError = require("../utils/AppError");
const logActivity = require("../utils/activityLogger");

// ===============================
// Save / Update Today's Attendance
// ===============================
const markAttendance = async (req, res, next) => {
    try {

        const attendanceData = req.body;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const savedAttendance = [];

        for (const item of attendanceData) {

            const attendance = await Attendance.findOneAndUpdate(
                {
                    student: item.student,
                    date: {
                        $gte: today,
                        $lt: tomorrow
                    }
                },
                {
                    breakfast: item.breakfast,
                    lunch: item.lunch,
                    dinner: item.dinner,
                    date: today
                },
                {
                    new: true,
                    upsert: true
                }
            );

            savedAttendance.push(attendance);
        }

        await logActivity(
            "Attendance Updated",
            `${savedAttendance.length} students' attendance has been updated.`,
            "Attendance",
            "calendar"
        );

        res.status(200).json({
            success: true,
            message: "Attendance saved successfully",
            data: savedAttendance
        });

    } catch (error) {
        next(error);
    }
};

// ===================================
// Get ONLY Today's Attendance
// ===================================
const getAttendance = async (req, res, next) => {
    try {

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const attendance = await Attendance.find({
            date: {
                $gte: today,
                $lt: tomorrow
            }
        }).populate("student");

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