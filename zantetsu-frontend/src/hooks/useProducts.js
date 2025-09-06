import { useQuery } from "@tanstack/react-query";
import productApi from "../api/productApi";

const cleanFilters = (filters) => {
  const cleaned = {};
  for (let key in filters) {
    if (
      filters[key] !== null &&
      filters[key] !== "" &&
      filters[key]?.length !== 0
    ) {
      cleaned[key] = filters[key];
    }
  }

  return cleaned;
};

export const useProducts = (filters) => {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: () => productApi.getProducts(cleanFilters(filters)).then((res) => res.data),
    keepPreviousData: true,
  });
};

export const useHomeProducts = () => {
  return useQuery({
    queryKey: ["homeProducts"],
    queryFn: () => productApi.getHomeProducts().then((res) => res.data),
  });
};
