import axiosClient from "./axiosClient";

const authApi = {
    register: (data) => axiosClient.post("/auth/register", data, { withCredentials: true }),
    login: (data) => axiosClient.post("/auth/login", data, { withCredentials: true }),
    verify: () => axiosClient.get("/auth/verify", { withCredentials: true }),
    logout: () => axiosClient.post("/auth/logout", {}, { withCredentials: true }),
}

export default authApi;