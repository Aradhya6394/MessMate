const { body, validationResult } = require("express-validator");

const validateMenu = [
    body("day")
        .trim()
        .notEmpty()
        .withMessage("Day is required"),

    body("breakfast")
        .trim()
        .notEmpty()
        .withMessage("Breakfast is required"),

    body("lunch")
        .trim()
        .notEmpty()
        .withMessage("Lunch is required"),

    body("dinner")
        .trim()
        .notEmpty()
        .withMessage("Dinner is required")
];

const checkValidation = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    }

    next();
};

module.exports = {
    validateMenu,
    checkValidation
};