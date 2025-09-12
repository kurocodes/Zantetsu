import FilterSection from "../components/Products/FilterSection";
import { useProducts } from "../hooks/useProducts";
import { FilterProvider, useFilters } from "../context/FiltersContext";
import PageNavigation from "../components/Products/PageNavigation";
import ProductsContainer from "../components/Products/ProductsContainer";
import { icons } from "../assets/assets";

function ProductsContent() {
  const { filters, setFilters, filterDrawerOpen, setFilterDrawerOpen } =
    useFilters();
  const { data, isLoading, isError } = useProducts(filters);
  const products = data?.products || [];

  const hasPreviousPage = data?.hasPreviousPage || false;
  const hasNextPage = data?.hasNextPage || false;
  const currentPage = data?.currentPage || 1;

  const sortedProducts = [...products].sort((a, b) => {
    switch (filters.sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0; // no sorting
    }
  });

  const handlePageChange = (dir) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      page: prevFilters.page + dir,
    }));
  };

  return (
    <>
      <div className="px-10 py-16 border-b border-bgMuted">
        {/* Heading */}
        <h1 className="text-4xl font-heading text-highlight text-center mb-10">
          All Products
        </h1>

        <div className="grid md:grid-cols-[220px_1fr] gap-10">
          {/* Sidebar - Filter and Sort */}
          <FilterSection
            productCount={isLoading && isError ? 0 : sortedProducts?.length}
          />

          <span
            className="md:hidden fixed z-10 bottom-0 right-0 -translate-[50%] text-white bg-highlight w-fit p-4 rounded-full"
            onClick={() => setFilterDrawerOpen(true)}
          >
            <icons.FilterIcon />
          </span>

          {/* Products */}
          <div>
            <ProductsContainer
              sortedProducts={sortedProducts}
              isLoading={isLoading}
              isError={isError}
            />

            {/* Page naviagation */}
            {!isLoading &&
              sortedProducts?.length > 0 &&
              !(data?.currentPage === 1 && data?.hasNextPage === false) && (
                <PageNavigation
                  hasPreviousPage={hasPreviousPage}
                  hasNextPage={hasNextPage}
                  currentPage={currentPage}
                  handlePageChange={handlePageChange}
                />
              )}
          </div>
        </div>
      </div>

      <FilterSection
        productCount={isLoading && isError ? 0 : sortedProducts?.length}
        isDrawer
        animate={{ y: filterDrawerOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </>
  );
}

export default function Products() {
  return (
    <FilterProvider>
      <ProductsContent />
    </FilterProvider>
  );
}