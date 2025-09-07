import { useState } from "react";
import { icons } from "../../assets/assets";
import { AnimatePresence, motion } from "motion/react";
import { useFilters } from "../../context/FiltersContext";
import { useEffect } from "react";

export function PriceFilter() {
  const [isOpen, setIsOpen] = useState(false);

  const { filters, setFilters } = useFilters();

  const [minInput, setMinInput] = useState(filters.minPrice?.toString() || "");
  const [maxInput, setMaxInput] = useState(filters.maxPrice?.toString() || "");

  useEffect(() => {
    const handler = setTimeout(() => {
      const min = minInput === "" ? null : Math.max(0, Number(minInput));
      const max = maxInput === "" ? null : Math.max(0, Number(maxInput));

      setFilters((prev) => ({
        ...prev,
        minPrice: min,
        maxPrice: max,
        page: 1,
      }));
    }, 500);

    return () => clearTimeout(handler);
  }, [minInput, maxInput, setFilters]);

  return (
    <div className="py-2 border-t-2 border-bgMuted">
      {/* Header button */}
      <button
        className="group w-full flex items-center justify-between gap-2 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Price</span>
        <span
          className={`text-sm bg-bgMuted rounded-full px-1 py-1 mt-[2px] group-hover:bg-bgLight group-hover:text-bgDark transition-all duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <icons.IoIosArrowDown
            className={`${
              isOpen ? "" : "rotate-0"
            } transition-all duration-200`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {/* Min Price */}
              <div className="flex flex-col gap-1">
                <label className="text-sm">From: </label>
                <input
                  type="number"
                  value={minInput}
                  onChange={(e) => setMinInput(e.target.value)}
                  className="p-2 rounded-md border border-bgMuted bg-bgSoft text-bgLight focus:outline-none focus:border-accentGold"
                />
              </div>

              {/* Max Price */}
              <div className="flex flex-col gap-1">
                <label className="text-sm">To:</label>
                <input
                  type="number"
                  value={maxInput}
                  onChange={(e) => setMaxInput(e.target.value)}
                  className="p-2 rounded-md border border-bgMuted bg-bgSoft text-bgLight focus:outline-none focus:border-accentGold"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
