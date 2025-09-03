import { useState } from "react";
import { assets, icons } from "../../assets/assets";
import { navItems } from "../../utils/data";
import SimpleDropdown from "../SimpleDropdown";
import { AnimatePresence, motion } from "motion/react";
import { useGeneralContext } from "../../context/GeneralContext";
import { NavLink } from "react-router-dom";
import { NavItem } from "./NavItem";

export default function Navbar() {
  const { showAuthContainer, setShowAuthContainer, navigate, setShowCart, showSidebar, setShowSidebar } =
    useGeneralContext();

  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="sticky top-0 z-1 flex items-center max-sm:justify-between bg-bgLight px-4 shadow">
      {/* Left nav */}
      <div className="sm:flex-1 font-subheading font-semibold">
        <div className="hidden lg:flex gap-4">
          <SimpleDropdown />
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} action="/products" />
          ))}
        </div>
        <div className="lg:hidden" onClick={() => setShowSidebar(!showSidebar)}>
          <icons.HiMenuAlt1 className={iconStyle} />
        </div>
      </div>

      {/* Logo */}
      <div className="xl:flex-1 flex justify-center cursor-pointer">
        <img
          src={assets.zantetsu_logo_dark}
          alt="Zantetsu Logo"
          className="w-25"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="sm:flex-1 flex gap-4 justify-end items-center">
        <AnimatePresence initial={false}>
          {showSearch && (
            <motion.input
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              type="text"
              placeholder="Search..."
              className="ps-4 pe-2 py-2 text-sm rounded-full border-2 border-highlight focus:outline-none"
            />
          )}
        </AnimatePresence>
        <icons.IoSearch
          className={`${iconStyle} ${showSearch ? "text-highlight" : ""}`}
          onClick={() => setShowSearch((prev) => !prev)}
        />
        <icons.RiAccountCircleLine
          className={iconStyle}
          onClick={() => setShowAuthContainer(!showAuthContainer)}
        />
        <icons.LuShoppingCart className={iconStyle} onClick={() => setShowCart(true)} />
      </div>
    </div>
  );
}

const iconStyle =
  "text-3xl cursor-pointer hover:scale-110 hover:text-highlight transition-all duration-300";
