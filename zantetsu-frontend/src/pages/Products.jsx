import { products } from "../assets/products";
import ProductCard from "../components/Products/ProductCard";
import FilterSection from "../components/Products/FilterSection";

export default function Products() {
  return (
    <div className="px-10 py-16 border-b border-bgMuted">
      {/* Heading */}
      <h1 className="text-4xl font-heading text-highlight text-center mb-10">
        All Products
      </h1>

      <div className="grid lg:grid-cols-[220px_1fr] gap-10">
        {/* Sidebar - Filter and Sort */}
        <FilterSection />

        {/* Products */}
        <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              images={product.images}
              title={product.title}
              discountedPrice={product.discountedPrice}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
