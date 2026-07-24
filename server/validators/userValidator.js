const { body, validationResult } = require("express-validator");

// Validation Rules
const validateRegister = [
    body("name")
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .isEmail()
        .withMessage("Enter a valid email"),

    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),

    // Role is optional because every registered user
    // will automatically become a student.
    body("role")
        .optional()
        .isIn(["admin", "student"])
        .withMessage("Role must be admin or student")
];

// Check Validation Result
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
    validateRegister,
    checkValidation
};