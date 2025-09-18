import { motion } from "motion/react";
import { useState } from "react";
import { icons } from "../../assets/assets";

export default function QuantitySelector({
  small = false,
  qty = 1,
  increase,
  decrease,
}) {
  return (
    <div className={`flex items-center ${small ? "gap-2" : "gap-4"}`}>
      <motion.button
        className={`p-2 rounded bg-bgMuted cursor-pointer ${
          small ? "" : "text-xl"
        }`}
        onClick={decrease}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <icons.FaMinus />
      </motion.button>
      <span
        className={` font-semibold w-5 text-center ${
          small ? "text-sm" : "text-lg"
        }`}
      >
        {qty}
      </span>
      <motion.button
        className={`p-2 rounded bg-bgMuted cursor-pointer ${
          small ? "" : "text-xl"
        }`}
        onClick={increase}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <icons.FaPlus />
      </motion.button>
    </div>
  );
}
