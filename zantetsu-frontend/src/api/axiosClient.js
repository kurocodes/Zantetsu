import axios from "axios";
import qs from "qs";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const axiosClient = axios.create({
  baseURL: `${BACKEND_URL}/api`,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
