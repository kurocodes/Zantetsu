import { createContext, useContext, useState } from "react";

const FiltersContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    productType: [],
    anime: [],
    minPrice: null,
    maxPrice: null,
    sort: null,
    page: 1,
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);