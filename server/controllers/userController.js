const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");

// ==========================
// Register User
// ==========================
const registerUser = async (req, res, next) => {
    try {

        const { name, email, password, role } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return next(new AppError("User already exists", 400));
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        next(error);
    }
};

// ==========================
// Login User
// ==========================
const loginUser = async (req, res, next) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return next(new AppError("Invalid Email or Password", 400));
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return next(new AppError("Invalid Email or Password", 400));
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        next(error);
    }
};

// ==========================
// Get Logged-in User Profile
// ==========================
const getProfile = async (req, res, next) => {
    try {

        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return next(new AppError("User not found", 404));
        }

        res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerUser,
    loginUser,
    getProfile
};