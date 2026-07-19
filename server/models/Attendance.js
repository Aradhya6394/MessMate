const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
{
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    breakfast: {
        type: Boolean,
        default: false
    },

    lunch: {
        type: Boolean,
        default: false
    },

    dinner: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Attendance", attendanceSchema);