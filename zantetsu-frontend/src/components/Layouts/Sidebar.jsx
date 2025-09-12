import { motion } from "motion/react";
import { icons } from "../../assets/assets";
import { NavItem } from "./NavItem";
import { navItems } from "../../utils/data";
import { NavLink } from "react-router-dom";
import { useGeneralContext } from "../../context/GeneralContext";
import { useState } from "react";

export default function Sidebar() {
  const { showSidebar, setShowSidebar } = useGeneralContext();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-20 bg-bgSoft/40 w-screen h-screen text-bgLight">
      <motion.div
        className="absolute left-0 w-full xs:w-70 h-full bg-bgSoft overflow-y-auto hide-scrollbar"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="w-full border-b border-bgMuted">
          <button
            className="p-4 text-3xl cursor-pointer hover:text-highlight hover:scale-110 transition-all duration-200"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <icons.IoClose />
          </button>
        </div>

        <div className="flex flex-col">
          <div className="relative w-full border-b border-bgMuted">
            <button className="p-4 w-full flex justify-between items-center gap-2 cursor-pointer hover:text-highlight" onClick={() => setIsOpen(!isOpen)} >
              <span>Action Figures</span>
              <icons.IoIosArrowDown
                className={`mt-[2px]  transition-all duration-300`}
              />
            </button>

            {isOpen && (
              <div className="absolute w-full px-5 py-2 rounded-lg shadow-lg bg-bgMuted text-bgLight z-50 animate-in fade-in-0 zoom-in-95 flex flex-col gap-2">
                <div onClick={() => setShowSidebar(false)}><NavLink to="/products?productType=Action Figure&anime=One Piece">One Piece</NavLink></div>
                <div onClick={() => setShowSidebar(false)}><NavLink to="/products?productType=Action Figure&anime=Naruto">Naruto</NavLink></div>
                <div onClick={() => setShowSidebar(false)}><NavLink to="/products?productType=Action Figure&anime=Bleach">Bleach</NavLink></div>
                <div onClick={() => setShowSidebar(false)}><NavLink to="/products?productType=Action Figure&anime=Dragon Ball Z">Dragon Ball Z</NavLink></div>
                <div onClick={() => setShowSidebar(false)}><NavLink to="/products?productType=Action Figure&anime=Demon Slayer">Demon Slayer</NavLink></div>
              </div>
            )}
          </div>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              {...item}
              Icon={icons.IoIosArrowForward}
              action={`/products?productType=${item.label}`}
              onClick={() => setShowSidebar(false)}
              style={"p-4 border-b border-bgMuted w-full justify-between"}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
