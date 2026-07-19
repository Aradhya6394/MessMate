import { useEffect, useState } from "react";

function StudentForm({ onSubmit, initialData }) {

    const [formData, setFormData] = useState({
        name: "",
        rollNo: "",
        email: "",
        course: "",
        year: "",
        hostel: "",
        roomNo: "",
    });

    useEffect(() => {

        if (initialData) {

            setFormData({
                name: initialData.name || "",
                rollNo: initialData.rollNo || "",
                email: initialData.email || "",
                course: initialData.course || "",
                year: initialData.year || "",
                hostel: initialData.hostel || "",
                roomNo: initialData.roomNo || "",
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

            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Student Name"
                className="w-full border rounded-xl p-3"
            />

            <input
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                placeholder="Roll Number"
                className="w-full border rounded-xl p-3"
            />

            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border rounded-xl p-3"
            />

            <input
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="Course"
                className="w-full border rounded-xl p-3"
            />

            <input
                name="year"
                type="number"
                value={formData.year}
                onChange={handleChange}
                placeholder="Year"
                className="w-full border rounded-xl p-3"
            />

            <input
                name="hostel"
                value={formData.hostel}
                onChange={handleChange}
                placeholder="Hostel"
                className="w-full border rounded-xl p-3"
            />

            <input
                name="roomNo"
                value={formData.roomNo}
                onChange={handleChange}
                placeholder="Room Number"
                className="w-full border rounded-xl p-3"
            />

            <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl"
            >
                Save Student
            </button>

        </form>

    );

}

export default StudentForm;