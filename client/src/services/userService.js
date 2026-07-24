import api from "./api";

export const registerUser = async (userData) => {
    const response = await api.post("/users/register", userData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await api.post("/users/login", credentials);

    if (response.data.token) {
        localStorage.setItem("token", response.data.token);
    }

    return response.data;
};

// NEW
export const getProfile = async () => {
    const response = await api.get("/users/profile");
    return response.data.data;
};

export const logoutUser = () => {
    localStorage.removeItem("token");
};