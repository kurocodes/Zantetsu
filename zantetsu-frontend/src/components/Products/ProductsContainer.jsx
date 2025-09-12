import { useFilters } from "../../context/FiltersContext";
import { ProductCardSkeleton } from "../Loaders/ProductCardSkeleton";
import ProductCard from "./ProductCard";
import { InfoMessage } from "../Common/InfoMessage";

export default function ProductsContainer({
  sortedProducts,
  isLoading,
  isError,
}) {
  const { setFilters } = useFilters();

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-6">
      {isLoading ? (
        Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} imgHeight="h-50" />
        ))
      ) : isError ? (
        <InfoMessage
          icon="❌"
          title="Oops! Failed to fetch products"
          description="Something went wrong while fetching the products. Please try again."
        >
          <button
            onClick={() => window.location.reload()}
            className="bg-highlight text-white px-4 py-2 rounded hover:bg-accentGold transition"
          >
            Retry
          </button>
        </InfoMessage>
      ) : sortedProducts.length === 0 ? (
        <InfoMessage
          icon="🔍"
          title="No Products Found"
          description="We couldn’t find any products matching your filters."
        >
          <button
            onClick={() =>
              setFilters({
                productType: [],
                anime: [],
                minPrice: null,
                maxPrice: null,
                sort: null,
                page: 1,
              })
            }
            className="bg-highlight text-white px-4 py-2 rounded hover:bg-accentGold transition"
          >
            Clear Filters
          </button>
        </InfoMessage>
      ) : (
        sortedProducts.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            images={product.images}
            title={product.name}
            discountedPrice={product.discountedPrice}
            price={product.price}
          />
        ))
      )}
    </div>
  );
}
