import axiosClient from "./axiosClient";

const productApi = {
  getProducts: (params) => axiosClient.get("/products", { params }),
  getHomeProducts: () => axiosClient.get("/products/home"),
};

export default productApi;
