import axiosClient from "./axiosClient";

const productApi = {
  getProducts: (params) => axiosClient.get("/products", { params }),
  getHomeProducts: () => axiosClient.get("/products/home"),
  getProductDetails: (productId) => axiosClient.get(`/products/${productId}`),
};

export default productApi;
