import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import authApi from "../api/authApi";

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => authApi.register(data).then((res) => res.data),
    onSuccess: (user) => {
      queryClient.setQueryData(["authUser"], user);
    },
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => authApi.login(data).then((res) => res.data),
    onSuccess: (user) => {
      queryClient.setQueryData(["authUser"], user);
    },
  });
};

export const useVerifyUser = () => {
  return useQuery({
    queryKey: ["authUser"],
    queryFn: () => authApi.verify().then((res) => res.data),
    retry: false,
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      queryClient.setQueryData(["authUser"], null);
    },
  });
};
