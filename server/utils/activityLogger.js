const Activity = require("../models/Activity");

const logActivity = async (title, description, type, icon) => {

    try {

        await Activity.create({
            title,
            description,
            type,
            icon,
        });

    } catch (error) {

        console.log("Activity Logger Error:", error.message);

    }

};

module.exports = logActivity;