const Student = require("../models/Student");
const AppError = require("../utils/AppError");
const logActivity = require("../utils/activityLogger");

// GET All Students
const getStudents = async (req, res, next) => {
    try {

        const students = await Student.find();

        res.status(200).json({
            success: true,
            count: students.length,
            data: students
        });

    } catch (error) {
        next(error);
    }
};

// GET Student By ID
const getStudentById = async (req, res, next) => {
    try {

        const student = await Student.findById(req.params.id);

        if (!student) {
            return next(new AppError("Student not found", 404));
        }

        res.status(200).json({
            success: true,
            data: student
        });

    } catch (error) {
        next(error);
    }
};

// POST Add Student
const addStudent = async (req, res, next) => {
    try {

        const student = await Student.create(req.body);

        await logActivity(
            "New Student Added",
            `${student.name} has been registered.`,
            "Student",
            "user"
        );

        res.status(201).json({
            success: true,
            message: "Student added successfully",
            data: student
        });

    } catch (error) {
        next(error);
    }
};

// PUT Update Student
const updateStudent = async (req, res, next) => {
    try {

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedStudent) {
            return next(new AppError("Student not found", 404));
        }

        await logActivity(
            "Student Updated",
            `${updatedStudent.name}'s profile was updated.`,
            "Student",
            "edit"
        );

        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: updatedStudent
        });

    } catch (error) {
        next(error);
    }
};

// DELETE Student
const deleteStudent = async (req, res, next) => {
    try {

        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return next(new AppError("Student not found", 404));
        }

        await logActivity(
            "Student Deleted",
            `${student.name} has been removed.`,
            "Student",
            "delete"
        );

        res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
};