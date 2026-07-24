import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

import MainLayout from "../layouts/MainLayout";
import StudentModal from "../components/students/StudentModal";

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../services/studentService";

function Students() {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load students");
    } finally {
      setLoading(false);
    }
  };

  const handleAddStudent = async (student) => {
    try {
      await addStudent(student);

      toast.success("Student Added Successfully");

      setOpenModal(false);

      fetchStudents();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to add student"
      );
    }
  };

  const handleUpdateStudent = async (student) => {
    try {
      await updateStudent(selectedStudent._id, student);

      toast.success("Student Updated Successfully");

      setOpenModal(false);
      setSelectedStudent(null);
      setIsEditing(false);

      fetchStudents();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Update Failed"
      );
    }
  };

  const handleDeleteStudent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?"))
      return;

    try {
      await deleteStudent(id);

      toast.success("Student Deleted Successfully");

      fetchStudents();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Delete Failed"
      );
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.rollNo
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-stone-800">
            Students
          </h1>

          <p className="text-stone-500 mt-2">
            Manage all hostel students.
          </p>
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="🔍 Search Student"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-4 py-3 w-72"
          />

          {isAdmin && (
            <button
              onClick={() => {
                setIsEditing(false);
                setSelectedStudent(null);
                setOpenModal(true);
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
            >
              + Add Student
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-stone-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-stone-100">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Roll No</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Course</th>
              <th className="px-6 py-4 text-left">Year</th>
              <th className="px-6 py-4 text-left">Hostel</th>
              <th className="px-6 py-4 text-left">Room</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="9" className="text-center py-10">
                  Loading...
                </td>
              </tr>
            ) : filteredStudents.length === 0 ? (
              <tr>
                <td
                  colSpan="9"
                  className="text-center py-16 text-gray-500 text-lg"
                >
                  No Student Found
                </td>
              </tr>
            ) : (
              filteredStudents.map((student) => (
                <tr
                  key={student._id}
                  className="border-t hover:bg-stone-50 transition"
                >
                  <td className="px-6 py-5">{student.name}</td>

                  <td className="px-6 py-5">{student.rollNo}</td>

                  <td className="px-6 py-5">{student.email}</td>

                  <td className="px-6 py-5">{student.course}</td>

                  <td className="px-6 py-5">{student.year}</td>

                  <td className="px-6 py-5">{student.hostel}</td>

                  <td className="px-6 py-5">{student.roomNo}</td>

                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-center">
                    {isAdmin ? (
                      <div className="flex justify-center gap-4">
                        <button
                          onClick={() => {
                            setSelectedStudent(student);
                            setIsEditing(true);
                            setOpenModal(true);
                          }}
                          className="text-blue-600 hover:underline"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDeleteStudent(student._id)
                          }
                          className="text-red-600 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    ) : (
                      <span className="text-stone-400">
                        View Only
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isAdmin && (
        <StudentModal
          open={openModal}
          onClose={() => {
            setOpenModal(false);
            setSelectedStudent(null);
            setIsEditing(false);
          }}
          onSubmit={
            isEditing
              ? handleUpdateStudent
              : handleAddStudent
          }
          initialData={selectedStudent}
          isEditing={isEditing}
        />
      )}
    </MainLayout>
  );
}

export default Students;