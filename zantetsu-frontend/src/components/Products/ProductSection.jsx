import { ProductCardSkeleton } from "../Loaders/ProductCardSkeleton";
import ProductCard from "./ProductCard";

export default function ProductSection({ title, products, isLoading = true }) {
  const skeletonCount = 4;

  return (
    <section>
      <h2 className="text-4xl font-subheading font-bold text-bgLight mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <ProductCardSkeleton key={index} imgHeight="h-70" />
            ))
          : products.map((product) => (
              <ProductCard
                key={product._id}
                id={product.id}
                images={product.images}
                title={product.name}
                discountedPrice={product.discountedPrice}
                price={product.price}
              />
            ))}
      </div>
    </section>
  );
}
