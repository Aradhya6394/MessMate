const Activity = require("../models/Activity");

// Get Latest Activities
const getActivities = async (req, res, next) => {

    try {

        const activities = await Activity.find()
            .sort({ createdAt: -1 })
            .limit(10);

        res.status(200).json({
            success: true,
            count: activities.length,
            data: activities,
        });

    } catch (error) {
        next(error);
    }

};

module.exports = {
    getActivities,
};