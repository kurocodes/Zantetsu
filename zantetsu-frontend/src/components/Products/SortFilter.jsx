import { useState } from "react";
import { icons } from "../../assets/assets";
import { AnimatePresence, motion } from "motion/react";
import { useFilters } from "../../context/FiltersContext";

export function SortFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const { filters, setFilters } = useFilters();

   const options = [
    { label: "Price: Low → High", value: "price-asc" },
    { label: "Price: High → Low", value: "price-desc" },
    { label: "Name: A → Z", value: "name-asc" },
    { label: "Name: Z → A", value: "name-desc" },
  ];

  return (
    <div className="py-2 border-t-2 border-bgMuted">
      <button
        className="group w-full flex items-center justify-between gap-2 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Sort By</span>
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
              {options.map((option) => (
                <button
                  key={option.value}
                  className={`text-left px-2 py-1 rounded hover:bg-bgMuted transition-colors duration-200 ${
                    filters.sort === option.value ? "bg-bgMuted text-accentGold" : ""
                  }`}
                  onClick={() => setFilters((prev) => ({
                    ...prev,
                    sort: option.value
                  }))}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
