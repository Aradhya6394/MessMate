import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import MainLayout from "../layouts/MainLayout";
import MenuModal from "../components/menu/MenuModal";

import {
    getMenu,
    addMenu,
    updateMenu,
    deleteMenu,
} from "../services/menuService";

function Menu() {

    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);

    const [openModal, setOpenModal] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchMenus();
    }, []);

    const fetchMenus = async () => {

        try {

            const data = await getMenu();
            setMenus(data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const handleAddMenu = async (menu) => {

        try {

            await addMenu(menu);

            toast.success("Menu Added Successfully");

            setOpenModal(false);

            fetchMenus();

        } catch (error) {

            toast.error("Failed to add menu");

        }

    };

    const handleUpdateMenu = async (menu) => {

        try {

            await updateMenu(selectedMenu._id, menu);

            toast.success("Menu Updated Successfully");

            setOpenModal(false);

            setSelectedMenu(null);

            setIsEditing(false);

            fetchMenus();

        } catch (error) {

            toast.error("Update Failed");

        }

    };

    const handleDeleteMenu = async (id) => {

        if (!window.confirm("Delete this menu?")) return;

        try {

            await deleteMenu(id);

            toast.success("Menu Deleted Successfully");

            fetchMenus();

        } catch (error) {

            toast.error("Delete Failed");

        }

    };

    return (

        <MainLayout>

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-4xl font-bold text-stone-800">
                        Weekly Menu
                    </h1>

                    <p className="text-stone-500 mt-2">
                        Manage breakfast, lunch and dinner.
                    </p>

                </div>

                <button

                    onClick={() => {

                        setIsEditing(false);
                        setSelectedMenu(null);
                        setOpenModal(true);

                    }}

                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow"

                >

                    + Add Menu

                </button>

            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-stone-200 overflow-hidden">

                <table className="w-full">

                    <thead className="bg-orange-50">

                        <tr>

                            <th className="px-6 py-4 text-left">Day</th>

                            <th className="px-6 py-4 text-left">Breakfast</th>

                            <th className="px-6 py-4 text-left">Lunch</th>

                            <th className="px-6 py-4 text-left">Dinner</th>

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

                            menus.map((menu) => (

                                <tr
                                    key={menu._id}
                                    className="border-t hover:bg-orange-50"
                                >

                                    <td className="px-6 py-5 font-semibold">

                                        {menu.day}

                                    </td>

                                    <td className="px-6 py-5">

                                        {menu.breakfast}

                                    </td>

                                    <td className="px-6 py-5">

                                        {menu.lunch}

                                    </td>

                                    <td className="px-6 py-5">

                                        {menu.dinner}

                                    </td>

                                    <td className="px-6 py-5">

                                        <div className="flex justify-center gap-3">

                                            <button

                                                onClick={() => {

                                                    setSelectedMenu(menu);

                                                    setIsEditing(true);

                                                    setOpenModal(true);

                                                }}

                                                className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700"

                                            >

                                                Edit

                                            </button>

                                            <button

                                                onClick={() =>
                                                    handleDeleteMenu(menu._id)
                                                }

                                                className="px-3 py-1 rounded-lg bg-red-100 text-red-600"

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

            <MenuModal

                open={openModal}

                onClose={() => {

                    setOpenModal(false);
                    setSelectedMenu(null);
                    setIsEditing(false);

                }}

                onSubmit={
                    isEditing
                        ? handleUpdateMenu
                        : handleAddMenu
                }

                initialData={selectedMenu}

                isEditing={isEditing}

            />

        </MainLayout>

    );

}

export default Menu;