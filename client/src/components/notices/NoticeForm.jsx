import { useEffect, useState } from "react";

function NoticeForm({
    onSubmit,
    initialData = {},
    isEditing = false,
}) {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "General",
        priority: "Medium",
    });

    useEffect(() => {

        if (isEditing && initialData) {

            setFormData({
                title: initialData.title || "",
                description: initialData.description || "",
                category: initialData.category || "General",
                priority: initialData.priority || "Medium",
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

        <form
            onSubmit={handleSubmit}
            className="space-y-5"
        >

            <input
                name="title"
                placeholder="Notice Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            />

            <textarea
                rows="5"
                name="description"
                placeholder="Notice Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            />

            <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            >

                <option>General</option>
                <option>Food</option>
                <option>Hostel</option>
                <option>Emergency</option>
                <option>Event</option>

            </select>

            <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            >

                <option>High</option>
                <option>Medium</option>
                <option>Low</option>

            </select>

            <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3"
            >

                {isEditing
                    ? "Update Notice"
                    : "Publish Notice"}

            </button>

        </form>

    );

}

export default NoticeForm;