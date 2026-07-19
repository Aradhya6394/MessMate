import { useEffect, useState } from "react";

function ComplaintForm({
    onSubmit,
    initialData,
    isEditing,
    students,
}) {

    const [formData, setFormData] = useState({
        student: "",
        title: "",
        description: "",
        category: "Other",
        status: "Pending",
    });

    useEffect(() => {

        if (isEditing && initialData) {

            setFormData({
                student: initialData.student?._id || "",
                title: initialData.title,
                description: initialData.description,
                category: initialData.category,
                status: initialData.status,
            });

        }

    }, [initialData]);

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

            <select
                name="student"
                value={formData.student}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                disabled={isEditing}
            >

                <option value="">Select Student</option>

                {students.map((student) => (

                    <option
                        key={student._id}
                        value={student._id}
                    >
                        {student.name}
                    </option>

                ))}

            </select>

            <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Complaint Title"
                className="w-full border rounded-xl p-3"
            />

            <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full border rounded-xl p-3"
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

            {isEditing && (

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

            <button className="w-full bg-orange-500 text-white rounded-xl py-3">

                {isEditing ? "Update Complaint" : "Submit Complaint"}

            </button>

        </form>

    );
}

export default ComplaintForm;