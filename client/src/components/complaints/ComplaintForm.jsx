import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

function ComplaintForm({
    onSubmit,
    initialData,
    isEditing,
}) {

    const { user } = useAuth();
    const isAdmin = user?.role === "admin";

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "Other",
        status: "Pending",
    });

    useEffect(() => {

        if (isEditing && initialData) {

            setFormData({
                title: initialData.title || "",
                description: initialData.description || "",
                category: initialData.category || "Other",
                status: initialData.status || "Pending",
            });

        }

    }, [initialData, isEditing]);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(formData);

    };

    return (

        <form onSubmit={handleSubmit} className="space-y-4">

            {!isAdmin && (
                <>
                    <input
                        type="text"
                        name="title"
                        placeholder="Complaint Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3"
                        required
                    />

                    <textarea
                        rows="4"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3"
                        required
                    />

                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3"
                    >
                        <option>Food</option>
                        <option>Hostel</option>
                        <option>Electricity</option>
                        <option>Water</option>
                        <option>Cleaning</option>
                        <option>Other</option>
                    </select>
                </>
            )}

            {isAdmin && isEditing && (
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                </select>
            )}

            <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3 font-semibold"
            >
                {isEditing ? "Update Complaint" : "Submit Complaint"}
            </button>

        </form>

    );

}

export default ComplaintForm;