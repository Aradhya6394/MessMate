const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const {
    validateNotice,
    checkValidation,
} = require("../validators/noticeValidator");

const {
    createNotice,
    getNotices,
    updateNotice,
    deleteNotice,
} = require("../controllers/noticeController");

// Everyone logged in can view notices
router.get("/", auth, getNotices);

// Admin only
router.post(
    "/",
    auth,
    admin,
    validateNotice,
    checkValidation,
    createNotice
);

router.put(
    "/:id",
    auth,
    admin,
    validateNotice,
    checkValidation,
    updateNotice
);

router.delete(
    "/:id",
    auth,
    admin,
    deleteNotice
);

module.exports = router;