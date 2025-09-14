import { useState } from "react";
import { assets, icons } from "../../assets/assets";
import { navItems } from "../../utils/data";
import SimpleDropdown from "../SimpleDropdown";
import { useGeneralContext } from "../../context/GeneralContext";
import { NavItem } from "./NavItem";
import { useAuthContext } from "../../context/AuthContext";
import { useLogout } from "../../hooks/useAuth";

export default function Navbar() {
  const { showAuthContainer, setShowAuthContainer, user } = useAuthContext();
  const { mutate: logout, isLoading, isError } = useLogout();
  const { navigate, setShowCart, showSidebar, setShowSidebar } =
    useGeneralContext();

  return (
    <div className="sticky top-0 z-1 flex items-center max-sm:justify-between bg-bgLight px-4 shadow">
      {/* Left nav */}
      <div className="sm:flex-1 font-subheading font-semibold">
        <div className="hidden lg:flex gap-4">
          <SimpleDropdown />
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              {...item}
              action={`/products?productType=${item.label}`}
            />
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
        {user ? (
          <button onClick={() => logout()}>Logout</button>
        ) : (
          <icons.RiAccountCircleLine
            className={iconStyle}
            onClick={() => setShowAuthContainer(!showAuthContainer)}
          />
        )}
        <icons.LuShoppingCart
          className={iconStyle}
          onClick={() => setShowCart(true)}
        />
      </div>
    </div>
  );
}

const iconStyle =
  "text-3xl cursor-pointer hover:scale-110 hover:text-highlight transition-all duration-300";
