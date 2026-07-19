const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const {
    validateMenu,
    checkValidation
} = require("../validators/menuValidator");

const {
    getMenu,
    addMenu,
    updateMenu,
    deleteMenu
} = require("../controllers/menuController");

// Everyone logged in can view menu
router.get("/", auth, getMenu);

// Admin Only
router.post(
    "/",
    auth,
    admin,
    validateMenu,
    checkValidation,
    addMenu
);

router.put(
    "/:id",
    auth,
    admin,
    validateMenu,
    checkValidation,
    updateMenu
);

router.delete("/:id", auth, admin, deleteMenu);

module.exports = router;