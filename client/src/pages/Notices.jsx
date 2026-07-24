import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

import MainLayout from "../layouts/MainLayout";
import NoticeModal from "../components/notices/NoticeModal";

import {
  getNotices,
  addNotice,
  updateNotice,
  deleteNotice,
} from "../services/noticeService";

function Notices() {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const [selectedNotice, setSelectedNotice] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const data = await getNotices();
      setNotices(data);
    } catch (error) {
      toast.error("Failed to load notices");
    } finally {
      setLoading(false);
    }
  };

  const handleAddNotice = async (notice) => {
    try {
      await addNotice(notice);

      toast.success("Notice Published");

      setOpenModal(false);

      fetchNotices();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to publish notice"
      );
    }
  };

  const handleUpdateNotice = async (notice) => {
    try {
      await updateNotice(selectedNotice._id, notice);

      toast.success("Notice Updated");

      setOpenModal(false);

      setSelectedNotice(null);

      setIsEditing(false);

      fetchNotices();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Update Failed"
      );
    }
  };

  const handleDeleteNotice = async (id) => {
    if (!window.confirm("Delete this notice?")) return;

    try {
      await deleteNotice(id);

      toast.success("Notice Deleted");

      fetchNotices();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete Failed"
      );
    }
  };

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-stone-800">
            Notice Board
          </h1>

          <p className="text-stone-500 mt-2">
            Publish important announcements for students.
          </p>
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search Notice..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-4 py-3 w-72"
          />

          {isAdmin && (
            <button
              onClick={() => {
                setSelectedNotice(null);
                setIsEditing(false);
                setOpenModal(true);
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
            >
              + Add Notice
            </button>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {loading ? (
          <div className="col-span-2 bg-white rounded-3xl p-10 text-center shadow">
            Loading Notices...
          </div>
        ) : filteredNotices.length === 0 ? (
          <div className="col-span-2 bg-white rounded-3xl p-10 text-center shadow text-gray-500">
            No Notices Found
          </div>
        ) : (
          filteredNotices.map((notice) => (
            <div
              key={notice._id}
              className="bg-white rounded-3xl shadow-lg border border-stone-200 p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-stone-800">
                    {notice.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(
                      notice.createdAt
                    ).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    notice.priority === "High"
                      ? "bg-red-100 text-red-600"
                      : notice.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {notice.priority}
                </span>
              </div>

              <span className="inline-block mt-4 bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-sm">
                {notice.category}
              </span>

              <p className="text-stone-600 leading-7 mt-5">
                {notice.description}
              </p>

              {isAdmin && (
                <div className="flex justify-end gap-5 mt-8">
                  <button
                    onClick={() => {
                      setSelectedNotice(notice);
                      setIsEditing(true);
                      setOpenModal(true);
                    }}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDeleteNotice(notice._id)
                    }
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {isAdmin && (
        <NoticeModal
          open={openModal}
          onClose={() => {
            setOpenModal(false);
            setSelectedNotice(null);
            setIsEditing(false);
          }}
          onSubmit={
            isEditing
              ? handleUpdateNotice
              : handleAddNotice
          }
          initialData={selectedNotice}
          isEditing={isEditing}
        />
      )}
    </MainLayout>
  );
}

export default Notices;