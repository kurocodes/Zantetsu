import { icons } from "../../assets/assets";
import { useGeneralContext } from "../../context/GeneralContext";
import CartItem from "./CartItem";
import { motion } from "motion/react";

export default function CartSection() {
  const { showCart, setShowCart } = useGeneralContext();

  return (
    <motion.div className="fixed top-0 right-0 z-10 bg-bgSoft/40 w-screen h-screen text-bgLight">
      <motion.div
      className="absolute right-0 w-100 h-full bg-bgSoft overflow-y-auto hide-scrollbar"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="sticky top-0 left-0 w-full bg-bgSoft px-8 py-4 border-b border-bgMuted flex justify-between items-center">
          <h2 className="font-heading text-2xl text-accentGold">
            Shopping Cart
          </h2>
          <span
            className="text-3xl cursor-pointer hover:text-highlight hover:scale-110 transition-all duration-200"
            onClick={() => setShowCart(false)}
          >
            <icons.IoClose />
          </span>
        </div>
        <div className="px-8">
          <div className="flex flex-col gap-4">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>

        <div className="sticky bottom-0 px-8 py-4 bg-bgMuted space-y-2">
          <div className="flex justify-between text-lg font-medium">
            <span>Subtotal</span>
            <span>$ 999</span>
          </div>
          <button className="w-full bg-highlight text-bgLight py-2 rounded font-medium cursor-pointer hover:text-bgDark hover:bg-accentGold transition-colors duration-200">
            Checkout
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
