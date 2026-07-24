const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
    registerUser,
    loginUser,
    getProfile
} = require("../controllers/userController");

const {
    validateRegister,
    checkValidation
} = require("../validators/userValidator");

router.post(
    "/register",
    validateRegister,
    checkValidation,
    registerUser
);

router.post("/login", loginUser);

// NEW ROUTE
router.get("/profile", auth, getProfile);

module.exports = router;