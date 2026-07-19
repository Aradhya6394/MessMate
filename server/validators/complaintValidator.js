const { body, validationResult } = require("express-validator");

const validateComplaint = [

    body("student")
        .notEmpty()
        .withMessage("Student ID is required"),

    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required"),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required"),

    body("category")
        .isIn([
            "Food",
            "Hostel",
            "Electricity",
            "Water",
            "Cleaning",
            "Other"
        ])
        .withMessage("Invalid Category")

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
    validateComplaint,
    checkValidation
};