import { useMutation } from "@tanstack/react-query";
import paymentApi from "../api/paymentApi";

export const useCreatePaymentIntent = () => {
    return useMutation({
        mutationFn: (data) => paymentApi.createIntent(data),
    })
}