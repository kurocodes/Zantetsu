import axios from "axios";
import ProductCard from "../components/Products/ProductCard";
import FilterSection from "../components/Products/FilterSection";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + "/api/products"
        );
        console.log(response.data.products);
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

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
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                images={product.images}
                title={product.title}
                discountedPrice={product.discountedPrice}
                price={product.price}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
