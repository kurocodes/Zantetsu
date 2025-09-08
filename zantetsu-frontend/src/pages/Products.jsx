import ProductCard from "../components/Products/ProductCard";
import FilterSection from "../components/Products/FilterSection";
import { useProducts } from "../hooks/useProducts";
import { FilterProvider, useFilters } from "../context/FiltersContext";
import { ProductCardSkeleton } from "../components/Loaders/ProductCardSkeleton";
import { icons } from "../assets/assets";

function ProductsContent() {
  const { filters, setFilters } = useFilters();
  const { data, isLoading, isError } = useProducts(filters);
  console.log(data);
  const products = data?.products || [];

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
    <div className="px-10 py-16 border-b border-bgMuted">
      {/* Heading */}
      <h1 className="text-4xl font-heading text-highlight text-center mb-10">
        All Products
      </h1>

      <div className="grid lg:grid-cols-[220px_1fr] gap-10">
        {/* Sidebar - Filter and Sort */}
        <FilterSection
          productCount={isLoading && isError ? 0 : sortedProducts?.length}
        />

        {/* Products */}
        <div>
          <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-6">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} imgHeight="h-50" />
              ))
            ) : isError ? (
              <p>Error fetching products</p>
            ) : (
              sortedProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product.id}
                  images={product.images}
                  title={product.name}
                  discountedPrice={product.discountedPrice}
                  price={product.price}
                />
              ))
            )}
          </div>

          {/* Page naviagation */}
          <div className="flex justify-between items-center mt-5">
            {/* Previous Page */}
            {data?.hasPreviousPage ? (
              <button
                className="group bg-accentGold text-2xl p-2 rounded-lg hover:bg-highlight hover:text-bgLight transition duration-200 cursor-pointer"
                onClick={() => handlePageChange(-1)}
              >
                <icons.IoIosArrowBack className="group-hover:scale-120 transition-all duration-200" />
              </button>
            ) : (
              <div />
            )}

            {/* Page Numbers */}
            <div className="space-x-2">
              {data?.hasPreviousPage && (
                <span className="bg-bgMuted text-white px-3 py-[6px] leading-none rounded-full">
                  {data.currentPage - 1}
                </span>
              )}
              <span className="font-bold bg-highlight text-white px-3 py-[6px] leading-none rounded-full">
                {data?.currentPage || 1}
              </span>
              {data?.hasNextPage && (
                <span className="bg-bgMuted text-white px-3 py-[6px] leading-none rounded-full">
                  {data.currentPage + 1}
                </span>
              )}
            </div>

            {/* Next Page */}
            {data?.hasNextPage ? (
              <button
                className="group bg-accentGold text-2xl p-2 rounded-lg hover:bg-highlight hover:text-bgLight transition duration-200 cursor-pointer"
                onClick={() => handlePageChange(1)}
              >
                <icons.IoIosArrowForward className="group-hover:scale-120 transition-all duration-200" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <FilterProvider>
      <ProductsContent />
    </FilterProvider>
  );
}
