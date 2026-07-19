import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import MainLayout from "../layouts/MainLayout";
import ComplaintModal from "../components/complaints/ComplaintModal";

import {
  getComplaints,
  addComplaint,
  updateComplaint,
  deleteComplaint,
} from "../services/complaintService";

import { getStudents } from "../services/studentService";

function Complaints() {
  const [complaints, setComplaints] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchComplaints();
    fetchStudents();
  }, []);

  const fetchComplaints = async () => {
    try {
      const data = await getComplaints();
      setComplaints(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddComplaint = async (complaint) => {
    try {
      await addComplaint(complaint);
      toast.success("Complaint Added Successfully");
      setOpenModal(false);
      fetchComplaints();
    } catch (error) {
      console.log(error);
      toast.error("Failed to Add Complaint");
    }
  };

  const handleUpdateComplaint = async (complaint) => {
    try {
      await updateComplaint(selectedComplaint._id, complaint);

      toast.success("Complaint Updated Successfully");

      setOpenModal(false);
      setSelectedComplaint(null);
      setIsEditing(false);

      fetchComplaints();
    } catch (error) {
      console.log(error);
      toast.error("Update Failed");
    }
  };

  const handleDeleteComplaint = async (id) => {
    const confirmDelete = window.confirm("Delete this complaint?");
    if (!confirmDelete) return;

    try {
      await deleteComplaint(id);
      toast.success("Complaint Deleted Successfully");
      fetchComplaints();
    } catch (error) {
      console.log(error);
      toast.error("Delete Failed");
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-stone-800">
            Complaints
          </h1>
          <p className="text-stone-500 mt-2">
            Manage all student complaints.
          </p>
        </div>

        <button
          onClick={() => {
            setOpenModal(true);
            setSelectedComplaint(null);
            setIsEditing(false);
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow"
        >
          + Add Complaint
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-stone-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-orange-50">
            <tr>
              <th className="px-6 py-4 text-left">Student</th>
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-10"
                >
                  Loading...
                </td>
              </tr>
            ) : (
              complaints.map((complaint) => (
                <tr
                  key={complaint._id}
                  className="border-t hover:bg-orange-50 transition"
                >
                  <td className="px-6 py-5">
                    {complaint.student?.name || "Unknown"}
                  </td>

                  <td className="px-6 py-5">
                    <div className="font-semibold">
                      {complaint.title}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {complaint.description}
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {complaint.category}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        complaint.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : complaint.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {complaint.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => {
                          setSelectedComplaint(complaint);
                          setIsEditing(true);
                          setOpenModal(true);
                        }}
                        className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteComplaint(complaint._id)
                        }
                        className="px-3 py-1 rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <ComplaintModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedComplaint(null);
          setIsEditing(false);
        }}
        onSubmit={
          isEditing
            ? handleUpdateComplaint
            : handleAddComplaint
        }
        initialData={selectedComplaint}
        isEditing={isEditing}
        students={students}
      />
    </MainLayout>
  );
}

export default Complaints;