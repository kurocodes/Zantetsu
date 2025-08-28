import { useState } from "react";
import { icons } from "../../assets/assets";
import { AnimatePresence, motion } from "motion/react";

export function SortFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    "Price: Low → High",
    "Price: High → Low",
    "Name: A → Z",
    "Name: Z → A",
  ];
  const [selected, setSelected] = useState(options[0]);

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
              {options.map((option, index) => (
                <button
                  key={index}
                  className={`text-left px-2 py-1 rounded hover:bg-bgMuted transition-colors duration-200 ${
                    selected === option ? "bg-bgMuted text-accentGold" : ""
                  }`}
                  onClick={() => setSelected(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
