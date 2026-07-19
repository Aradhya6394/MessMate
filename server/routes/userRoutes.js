const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser
} = require("../controllers/userController");

const {
    validateRegister,
    checkValidation
} = require("../validators/userValidator");

// Register User
router.post(
    "/register",
    validateRegister,
    checkValidation,
    registerUser
);

// Login User
router.post("/login", loginUser);

module.exports = router;