const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
{
    day: {
        type: String,
        required: true
    },

    breakfast: {
        type: String,
        required: true
    },

    lunch: {
        type: String,
        required: true
    },

    dinner: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Menu", menuSchema);