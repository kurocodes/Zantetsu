import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FiltersContext = createContext();

export const FilterProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const defaultFilters = {
    productType: [],
    anime: [],
    minPrice: 0,
    maxPrice: 4000,
    sort: null,
    page: 1,
  };

  // Initialize filters from URL
  const [filters, setFilters] = useState(() => {
    const obj = { ...defaultFilters };
    for (const [key, value] of searchParams.entries()) {
      if (key === "productType" || key === "anime") {
        obj[key] = value.split(",");
      } else if (key === "page" || key === "minPrice" || key === "maxPrice") {
        obj[key] = Number(value);
      } else {
        obj[key] = value;
      }
    }

    return obj;
  });

  // whenever filters change → update URL
  useEffect(() => {
    const params = {};

    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        params[key] = value.join(",");
      } else if (value !== null && value !== "" && value !== undefined) {
        params[key] = value;
      }
    });

    setSearchParams(params);
  }, [filters, searchParams]);

  return (
    <FiltersContext.Provider value={{ filters, setFilters, filterDrawerOpen, setFilterDrawerOpen }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
