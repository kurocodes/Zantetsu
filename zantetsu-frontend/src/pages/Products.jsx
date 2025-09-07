import ProductCard from "../components/Products/ProductCard";
import FilterSection from "../components/Products/FilterSection";
import { useProducts } from "../hooks/useProducts";
import { FilterProvider, useFilters } from "../context/FiltersContext";

function ProductsContent() {
  const { filters } = useFilters();
  const { data, isLoading, isError } = useProducts(filters);
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
        <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-6">
          {isLoading ? (
            <p>Loading...</p>
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
