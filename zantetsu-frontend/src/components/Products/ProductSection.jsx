import ProductCard from "./ProductCard";

export default function ProductSection({ title, products }) {
  return (
    <section>
      <h2 className="text-4xl font-subheading font-bold text-bgLight mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
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
    </section>
  );
}
