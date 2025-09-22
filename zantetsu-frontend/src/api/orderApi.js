import axiosClient from "./axiosClient";

const orderApi = {
  placeOrder: (orderData) =>
    axiosClient.post("/orders/place", orderData, { withCredentials: true }),
};

export default orderApi;
