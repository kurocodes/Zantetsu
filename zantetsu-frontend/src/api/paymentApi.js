import axiosClient from "./axiosClient";

const paymentApi = {
  createIntent: (data) =>
    axiosClient.post("/payments/create-intent", data, {
      withCredentials: true,
    }),
};

export default paymentApi;
