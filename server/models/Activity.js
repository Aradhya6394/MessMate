const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    type: {
        type: String,
        enum: [
            "Student",
            "Attendance",
            "Menu",
            "Complaint",
            "Notice",
            "User"
        ],
        required: true
    },

    icon: {
        type: String,
        default: "info"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Activity", activitySchema);