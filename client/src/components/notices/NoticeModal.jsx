import NoticeForm from "./NoticeForm";

function NoticeModal({
    open,
    onClose,
    onSubmit,
    initialData,
    isEditing,
}) {

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

            <div className="bg-white rounded-3xl p-8 w-[600px] shadow-2xl">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-2xl font-bold">

                        {isEditing
                            ? "Edit Notice"
                            : "Add Notice"}

                    </h2>

                    <button
                        onClick={onClose}
                        className="text-3xl text-gray-500 hover:text-red-500"
                    >
                        ×
                    </button>

                </div>

                <NoticeForm
                    onSubmit={onSubmit}
                    initialData={initialData}
                    isEditing={isEditing}
                />

            </div>

        </div>

    );

}

export default NoticeModal;