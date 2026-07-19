import MainLayout from "../layouts/MainLayout";
import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiClock,
    FiGlobe,
    FiUser,
} from "react-icons/fi";

function Contact() {

    const staff = [
        {
            name: "Mrs. Priya Sharma",
            role: "Mess Warden",
            phone: "+91 98765 43210",
            email: "warden@messmate.com",
        },
        {
            name: "Mr. Rahul Verma",
            role: "Assistant Warden",
            phone: "+91 98765 43211",
            email: "assistant@messmate.com",
        },
        {
            name: "Mr. Amit Singh",
            role: "Mess Manager",
            phone: "+91 98765 43212",
            email: "manager@messmate.com",
        },
    ];

    return (

        <MainLayout>

            <div className="mb-10">

                <h1 className="text-4xl font-bold text-stone-800">
                    Contact Us
                </h1>

                <p className="text-stone-500 mt-2">
                    Get in touch with the hostel administration.
                </p>

            </div>

            <div className="grid lg:grid-cols-3 gap-6">

                {staff.map((person, index) => (

                    <div
                        key={index}
                        className="bg-white rounded-3xl shadow-lg border border-stone-200 p-8 hover:shadow-xl transition"
                    >

                        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-3xl mb-5">

                            <FiUser />

                        </div>

                        <h2 className="text-2xl font-bold text-stone-800">

                            {person.name}

                        </h2>

                        <p className="text-orange-500 font-semibold mb-6">

                            {person.role}

                        </p>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3">

                                <FiPhone />

                                <span>{person.phone}</span>

                            </div>

                            <div className="flex items-center gap-3">

                                <FiMail />

                                <span>{person.email}</span>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-10">

                <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Hostel Information
                    </h2>

                    <div className="space-y-5">

                        <div className="flex gap-4">

                            <FiMapPin className="text-orange-500 mt-1" />

                            <div>

                                <h4 className="font-semibold">
                                    Address
                                </h4>

                                <p className="text-stone-500">

                                    Sitare University Hostel<br />

                                    Lucknow, Uttar Pradesh<br />

                                    India - 226021

                                </p>

                            </div>

                        </div>

                        <div className="flex gap-4">

                            <FiClock className="text-orange-500 mt-1" />

                            <div>

                                <h4 className="font-semibold">

                                    Office Hours

                                </h4>

                                <p className="text-stone-500">

                                    Monday - Saturday<br />

                                    8:00 AM - 8:00 PM

                                </p>

                            </div>

                        </div>

                        <div className="flex gap-4">

                            <FiMail className="text-orange-500 mt-1" />

                            <div>

                                <h4 className="font-semibold">

                                    Support Email

                                </h4>

                                <p className="text-stone-500">

                                    support@messmate.com

                                </p>

                            </div>

                        </div>

                        <div className="flex gap-4">

                            <FiGlobe className="text-orange-500 mt-1" />

                            <div>

                                <h4 className="font-semibold">

                                    Website

                                </h4>

                                <p className="text-stone-500">

                                    www.messmate.com

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-8 flex flex-col justify-center">

                    <h2 className="text-2xl font-bold mb-6">

                        Emergency Contact

                    </h2>

                    <div className="text-center">

                        <div className="text-5xl mb-4">
                            🚨
                        </div>

                        <h1 className="text-4xl font-bold text-red-500">

                            +91 99999 99999

                        </h1>

                        <p className="text-stone-500 mt-4">

                            Available 24 × 7 for hostel emergencies.

                        </p>

                    </div>

                </div>

            </div>

        </MainLayout>

    );

}

export default Contact;