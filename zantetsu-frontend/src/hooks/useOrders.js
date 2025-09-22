import { useMutation } from "@tanstack/react-query";
import orderApi from "../api/orderApi";

export const usePlaceOrder = () => {
  return useMutation({
    mutationFn: (orderData) => orderApi.placeOrder(orderData),
  });
};
