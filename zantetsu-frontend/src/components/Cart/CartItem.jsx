import PriceTag from "../Products/PriceTag";
import QuantitySelector from "../Products/QuantitySelector";
import { icons } from "../../assets/assets";
import { useCartContext } from "../../context/CartContext";

export default function CartItem({ product }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCartContext();

  return (
    <div className="flex gap-4 border-b border-bgMuted py-4">
      <div className="w-30 space-y-2">
        <div className="w-full">
          <img src={product.image} alt={product.title} className="rounded" />
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="font-body text-lg font-bold">{product.title}</h3>
        <div className="flex justify-between items-center">
          <PriceTag discountedPrice={product.discountedPrice} small />
          <div className="flex gap-2">
            <QuantitySelector
              small
              qty={product.qty}
              increase={() => increaseQty(product.id)}
              decrease={() => decreaseQty(product.id)}
            />
            <button
              className="w-full flex justify-center items-center gap-2 cursor-pointer hover:text-highlight"
              onClick={() => removeFromCart(product.id)}
            >
              <icons.MdDelete className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
