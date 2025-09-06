import { useState } from "react";
import { icons } from "../../assets/assets";
import { AnimatePresence, motion } from "motion/react";
import { useFilters } from "../../context/FiltersContext";

export function Filter({ label, filterKey, options }) {
  const { filters, setFilters } = useFilters();

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (option) => {
    setFilters((prev) => {
      const prevValues = prev[filterKey] || [];
      const newValues = prevValues.includes(option)
        ? prevValues.filter((v) => v !== option)
        : [...prevValues, option];

      return {
        ...prev,
        [filterKey]: newValues,
        page: 1,
      };
    });
  };

  return (
    <div className="py-2 border-t-2 border-bgMuted">
      <button
        className="group w-full flex items-center justify-between gap-2 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
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
            {options.map((option, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 py-1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <label className="relative flex items-center gap-2 cursor-pointer">
                  <div className="rounded bg-bgMuted">
                    <input
                      type="checkbox"
                      checked={filters[filterKey]?.includes(option) || false}
                      onChange={() => handleChange(option)}
                      className="peer sr-only"
                    />

                    <span className="w-4 h-4 flex items-center justify-center rounded peer-checked:bg-accentGold opacity-0 peer-checked:opacity-100 transition-all duration-200">
                      {/* Tick */}
                      <svg
                        className="w-3 h-3 text-white pointer-events-none"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </div>

                  <span>{option}</span>
                </label>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
