import { useEffect, useState } from "react";

function MenuForm({

    onSubmit,
    initialData,
    isEditing

}) {

    const [formData, setFormData] = useState({

        day: "",
        breakfast: "",
        lunch: "",
        dinner: ""

    });

    useEffect(() => {

        if (isEditing && initialData) {

            setFormData({

                day: initialData.day || "",
                breakfast: initialData.breakfast || "",
                lunch: initialData.lunch || "",
                dinner: initialData.dinner || ""

            });

        }

    }, [initialData, isEditing]);

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(formData);

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >

            <select

                name="day"

                value={formData.day}

                onChange={handleChange}

                className="w-full border rounded-xl p-3"

                required

            >

                <option value="">Select Day</option>

                <option>Monday</option>

                <option>Tuesday</option>

                <option>Wednesday</option>

                <option>Thursday</option>

                <option>Friday</option>

                <option>Saturday</option>

                <option>Sunday</option>

            </select>

            <input

                name="breakfast"

                value={formData.breakfast}

                onChange={handleChange}

                placeholder="Breakfast"

                className="w-full border rounded-xl p-3"

                required

            />

            <input

                name="lunch"

                value={formData.lunch}

                onChange={handleChange}

                placeholder="Lunch"

                className="w-full border rounded-xl p-3"

                required

            />

            <input

                name="dinner"

                value={formData.dinner}

                onChange={handleChange}

                placeholder="Dinner"

                className="w-full border rounded-xl p-3"

                required

            />

            <button

                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"

            >

                {isEditing ? "Update Menu" : "Add Menu"}

            </button>

        </form>

    );

}

export default MenuForm;