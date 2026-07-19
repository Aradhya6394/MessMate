const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        enum: [
            "General",
            "Food",
            "Hostel",
            "Emergency",
            "Event",
        ],
        default: "General",
    },

    priority: {
        type: String,
        enum: [
            "High",
            "Medium",
            "Low",
        ],
        default: "Medium",
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("Notice", noticeSchema);