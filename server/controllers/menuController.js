const Menu = require("../models/Menu");
const AppError = require("../utils/AppError");
const logActivity = require("../utils/activityLogger");

// Add Menu
const addMenu = async (req, res, next) => {
    try {

        const menu = await Menu.create(req.body);

        await logActivity(
            "Menu Created",
            `${menu.day} menu has been created.`,
            "Menu",
            "coffee"
        );

        res.status(201).json({
            success: true,
            message: "Menu added successfully",
            data: menu
        });

    } catch (error) {
        next(error);
    }
};

// Get All Menu
const getMenu = async (req, res, next) => {
    try {

        const menu = await Menu.find();

        res.status(200).json({
            success: true,
            count: menu.length,
            data: menu
        });

    } catch (error) {
        next(error);
    }
};

// Update Menu
const updateMenu = async (req, res, next) => {
    try {

        const updatedMenu = await Menu.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedMenu) {
            return next(new AppError("Menu not found", 404));
        }

        await logActivity(
            "Menu Updated",
            `${updatedMenu.day} menu has been updated.`,
            "Menu",
            "coffee"
        );

        res.status(200).json({
            success: true,
            message: "Menu updated successfully",
            data: updatedMenu
        });

    } catch (error) {
        next(error);
    }
};

// Delete Menu
const deleteMenu = async (req, res, next) => {
    try {

        const menu = await Menu.findByIdAndDelete(req.params.id);

        if (!menu) {
            return next(new AppError("Menu not found", 404));
        }

        await logActivity(
            "Menu Deleted",
            `${menu.day} menu has been deleted.`,
            "Menu",
            "delete"
        );

        res.status(200).json({
            success: true,
            message: "Menu deleted successfully"
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    addMenu,
    getMenu,
    updateMenu,
    deleteMenu
};