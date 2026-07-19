import api from "./api";

export const getMenu = async () => {
    const response = await api.get("/menu");
    return response.data.data;
};

export const addMenu = async (menu) => {
    const response = await api.post("/menu", menu);
    return response.data.data;
};

export const updateMenu = async (id, menu) => {
    const response = await api.put(`/menu/${id}`, menu);
    return response.data.data;
};

export const deleteMenu = async (id) => {
    const response = await api.delete(`/menu/${id}`);
    return response.data;
};