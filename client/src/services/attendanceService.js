import api from "./api";

export const getAttendance = async () => {
    const response = await api.get("/attendance");
    return response.data.data;
};

export const saveAttendance = async (attendance) => {
    const response = await api.post("/attendance", attendance);
    return response.data;
};