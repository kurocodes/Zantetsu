export default function PriceTag({ discountedPrice, price, small = false }) {
  return (
    <div className="flex gap-3 items-center">
      <p className={`text-highlight ${small ? "text-lg" : "text-2xl font-bold"}`}>${discountedPrice}</p>
      {price && (
        <p className="line-through text-gray-400 font-medium">${price}</p>
      )}
    </div>
  );
}
