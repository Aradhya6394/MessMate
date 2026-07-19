import api from "./api";

export const getComplaints = async () => {
    const response = await api.get("/complaints");
    return response.data.data;
};

export const addComplaint = async (complaint) => {
    const response = await api.post("/complaints", complaint);
    return response.data.data;
};

export const updateComplaint = async (id, complaint) => {
    const response = await api.put(`/complaints/${id}`, complaint);
    return response.data.data;
};

export const deleteComplaint = async (id) => {
    const response = await api.delete(`/complaints/${id}`);
    return response.data;
};