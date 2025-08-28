import { products } from "../../assets/products";
import PriceTag from "../Products/PriceTag";
import QuantitySelector from "../Products/QuantitySelector";


export default function CartItem() {
  return (
    <div className="flex gap-4 border-b border-bgMuted py-4">
      <div className="w-30 space-y-2">
        <div className="w-full">
          <img
            src={products[0].images[0]}
            alt="product image"
            className="rounded"
          />
        </div>
        <button className="w-full flex justify-center items-center gap-2 text-sm">
          Remove
        </button>
      </div>
      <div className="space-y-1">
        <h3 className="font-body text-lg font-bold">{products[0].title}</h3>
        <div className="flex justify-between items-center">
          <PriceTag discountedPrice={products[0].discountedPrice} small />
          <QuantitySelector small />
        </div>
      </div>
    </div>
  );
}
