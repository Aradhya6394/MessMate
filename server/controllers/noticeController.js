const Notice = require("../models/Notice");
const AppError = require("../utils/AppError");
const logActivity = require("../utils/activityLogger");

// Create Notice
const createNotice = async (req, res, next) => {
    try {

        const notice = await Notice.create(req.body);

        await logActivity(
            "Notice Published",
            `"${notice.title}" has been published.`,
            "Notice",
            "bell"
        );

        res.status(201).json({
            success: true,
            message: "Notice created successfully",
            data: notice,
        });

    } catch (error) {
        next(error);
    }
};

// Get All Notices
const getNotices = async (req, res, next) => {
    try {

        const notices = await Notice.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: notices.length,
            data: notices,
        });

    } catch (error) {
        next(error);
    }
};

// Update Notice
const updateNotice = async (req, res, next) => {
    try {

        const notice = await Notice.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!notice) {
            return next(new AppError("Notice not found", 404));
        }

        await logActivity(
            "Notice Updated",
            `"${notice.title}" has been updated.`,
            "Notice",
            "edit"
        );

        res.status(200).json({
            success: true,
            message: "Notice updated successfully",
            data: notice,
        });

    } catch (error) {
        next(error);
    }
};

// Delete Notice
const deleteNotice = async (req, res, next) => {
    try {

        const notice = await Notice.findByIdAndDelete(req.params.id);

        if (!notice) {
            return next(new AppError("Notice not found", 404));
        }

        await logActivity(
            "Notice Deleted",
            `"${notice.title}" has been deleted.`,
            "Notice",
            "delete"
        );

        res.status(200).json({
            success: true,
            message: "Notice deleted successfully",
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createNotice,
    getNotices,
    updateNotice,
    deleteNotice,
};