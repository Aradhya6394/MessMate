const { body, validationResult } = require("express-validator");

const validateNotice = [

    body("title")
        .notEmpty()
        .withMessage("Title is required"),

    body("description")
        .notEmpty()
        .withMessage("Description is required"),

    body("category")
        .isIn([
            "General",
            "Food",
            "Hostel",
            "Emergency",
            "Event",
        ])
        .withMessage("Invalid category"),

    body("priority")
        .isIn([
            "High",
            "Medium",
            "Low",
        ])
        .withMessage("Invalid priority"),

];

const checkValidation = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });

    }

    next();

};

module.exports = {
    validateNotice,
    checkValidation,
};