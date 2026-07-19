import StudentForm from "./StudentForm";

function StudentModal({
    open,
    onClose,
    onSubmit,
    initialData,
    isEditing,
}) {

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

            <div className="bg-white rounded-3xl p-8 w-[500px] shadow-2xl">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-2xl font-bold">

                        {isEditing ? "Edit Student" : "Add Student"}

                    </h2>

                    <button
                        onClick={onClose}
                        className="text-2xl text-gray-500 hover:text-red-500"
                    >
                        ×
                    </button>

                </div>

                <StudentForm
                    onSubmit={onSubmit}
                    initialData={initialData}
                />

            </div>

        </div>

    );
}

export default StudentModal;