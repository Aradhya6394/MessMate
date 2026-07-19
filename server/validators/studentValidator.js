const { body, validationResult } = require("express-validator");

const validateStudent = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),

    body("rollNo")
        .trim()
        .notEmpty()
        .withMessage("Roll Number is required"),

    body("email")
        .trim()
        .isEmail()
        .withMessage("Valid Email is required"),

    body("course")
        .trim()
        .notEmpty()
        .withMessage("Course is required"),

    body("year")
        .isInt({ min: 1, max: 5 })
        .withMessage("Year must be between 1 and 5"),

    body("hostel")
        .trim()
        .notEmpty()
        .withMessage("Hostel is required"),

    body("roomNo")
        .trim()
        .notEmpty()
        .withMessage("Room Number is required")

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
    validateStudent,
    checkValidation
};