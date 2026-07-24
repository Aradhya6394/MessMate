import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getProfile } from "../services/userService";

function Profile() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {

        try {

            const data = await getProfile();
            setUser(data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {
        return (
            <MainLayout>
                <div className="text-center py-20 text-2xl">
                    Loading Profile...
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>

            <div className="max-w-4xl mx-auto">

                <h1 className="text-4xl font-bold text-stone-800 mb-2">
                    My Profile
                </h1>

                <p className="text-stone-500 mb-8">
                    View your profile information.
                </p>

                <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-10">

                    <div className="flex flex-col items-center">

                        <div className="w-28 h-28 rounded-full bg-orange-100 flex items-center justify-center text-5xl font-bold text-orange-600">

                            {user?.name?.charAt(0).toUpperCase()}

                        </div>

                        <h2 className="text-3xl font-bold mt-5">
                            {user?.name}
                        </h2>

                        <p className="text-gray-500 mt-2 capitalize">
                            {user?.role}
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-10">

                        <div>
                            <p className="text-gray-500">Name</p>
                            <h3 className="font-semibold">
                                {user?.name}
                            </h3>
                        </div>

                        <div>
                            <p className="text-gray-500">Email</p>
                            <h3 className="font-semibold">
                                {user?.email}
                            </h3>
                        </div>

                        <div>
                            <p className="text-gray-500">Role</p>
                            <h3 className="font-semibold capitalize">
                                {user?.role}
                            </h3>
                        </div>

                        <div>
                            <p className="text-gray-500">User ID</p>
                            <h3 className="font-semibold">
                                {user?._id}
                            </h3>
                        </div>

                    </div>

                </div>

            </div>

        </MainLayout>
    );
}

export default Profile;