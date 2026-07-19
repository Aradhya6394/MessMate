import api from "./api";

export const getStudents = async () => {
    const response = await api.get("/students");
    return response.data.data;
};

export const addStudent = async (student) => {
    const response = await api.post("/students", student);
    return response.data.data;
};

export const updateStudent = async (id, student) => {
    const response = await api.put(`/students/${id}`, student);
    return response.data.data;
};

export const deleteStudent = async (id) => {
    const response = await api.delete(`/students/${id}`);
    return response.data;
};