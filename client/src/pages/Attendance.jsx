import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useAuth } from "../context/AuthContext";

import { getStudents } from "../services/studentService";
import {
  saveAttendance,
  getAttendance,
} from "../services/attendanceService";

function Attendance() {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = async () => {
    try {
      const studentData = await getStudents();
      const attendanceData = await getAttendance();

      const formatted = studentData.map((student) => {
        const record = attendanceData.find(
          (a) => a.student?._id === student._id
        );

        return {
          student: student._id,
          name: student.name,
          rollNo: student.rollNo,
          breakfast: record?.breakfast || false,
          lunch: record?.lunch || false,
          dinner: record?.dinner || false,
        };
      });

      setStudents(formatted);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckbox = (index, meal) => {
    if (!isAdmin) return;

    const updated = [...students];
    updated[index][meal] = !updated[index][meal];
    setStudents(updated);
  };

  const handleSave = async () => {
    try {
      const payload = students.map((student) => ({
        student: student.student,
        breakfast: student.breakfast,
        lunch: student.lunch,
        dinner: student.dinner,
      }));

      await saveAttendance(payload);

      alert("Attendance Saved Successfully");

      loadAttendance();
    } catch (error) {
      console.log(error);
      alert("Failed to save attendance");
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-stone-800">
            Attendance
          </h1>

          <p className="text-stone-500 mt-2">
            {isAdmin
              ? "Mark daily meal attendance."
              : "Today's meal attendance."}
          </p>
        </div>

        {isAdmin && (
          <button
            onClick={handleSave}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow"
          >
            Save Attendance
          </button>
        )}
      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-stone-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-orange-50">
            <tr>
              <th className="px-6 py-4 text-left">Student</th>
              <th className="px-6 py-4 text-left">Roll No</th>
              <th className="px-6 py-4 text-center">Breakfast</th>
              <th className="px-6 py-4 text-center">Lunch</th>
              <th className="px-6 py-4 text-center">Dinner</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-8">
                  Loading...
                </td>
              </tr>
            ) : (
              students.map((student, index) => (
                <tr
                  key={student.student}
                  className="border-t hover:bg-orange-50"
                >
                  <td className="px-6 py-5">{student.name}</td>

                  <td className="px-6 py-5">{student.rollNo}</td>

                  <td className="text-center">
                    <input
                      type="checkbox"
                      checked={student.breakfast}
                      disabled={!isAdmin}
                      onChange={() =>
                        handleCheckbox(index, "breakfast")
                      }
                      className="w-5 h-5"
                    />
                  </td>

                  <td className="text-center">
                    <input
                      type="checkbox"
                      checked={student.lunch}
                      disabled={!isAdmin}
                      onChange={() =>
                        handleCheckbox(index, "lunch")
                      }
                      className="w-5 h-5"
                    />
                  </td>

                  <td className="text-center">
                    <input
                      type="checkbox"
                      checked={student.dinner}
                      disabled={!isAdmin}
                      onChange={() =>
                        handleCheckbox(index, "dinner")
                      }
                      className="w-5 h-5"
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}

export default Attendance;