const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const {
    validateStudent,
    checkValidation
} = require("../validators/studentValidator");

const {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");



router.get("/", auth, getStudents);
router.get("/:id", auth, getStudentById);



router.post(
    "/",
    auth,
    admin,
    validateStudent,
    checkValidation,
    addStudent
);

router.put(
    "/:id",
    auth,
    admin,
    validateStudent,
    checkValidation,
    updateStudent
);

router.delete(
    "/:id",
    auth,
    admin,
    deleteStudent
);

module.exports = router;