const Student = require("../models/Student");
const Menu = require("../models/Menu");
const User = require("../models/User");
const Attendance = require("../models/Attendance");
const Complaint = require("../models/Complaint");

// Get Dashboard Data
const getDashboard = async (req, res, next) => {

    try {

        const totalStudents = await Student.countDocuments();

        const totalMenus = await Menu.countDocuments();

        const totalUsers = await User.countDocuments();

        const totalComplaints = await Complaint.countDocuments();

        const pendingComplaints = await Complaint.countDocuments({
            status: "Pending"
        });

        // Today's Attendance
        const today = new Date();

        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);

        tomorrow.setDate(today.getDate() + 1);

        const todayAttendance = await Attendance.countDocuments({

            date: {

                $gte: today,

                $lt: tomorrow

            }

        });

        res.status(200).json({

            success: true,

            data: {

                totalStudents,

                totalMenus,

                totalUsers,

                totalComplaints,

                pendingComplaints,

                todayAttendance

            }

        });

    } catch (error) {

        next(error);

    }

};

module.exports = {

    getDashboard

};