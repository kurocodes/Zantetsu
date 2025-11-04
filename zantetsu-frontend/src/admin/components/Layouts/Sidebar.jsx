import { NavLink } from "react-router-dom";
import { assets, icons } from "../../../assets/assets";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const pages = [
  {
    name: "Dashboard",
    route: "/admin/dashboard",
    icon: icons.MdOutlineDashboard,
  },
  {
    name: "Orders",
    route: "/admin/orders",
    icon: icons.LuShoppingCart,
  },
  {
    name: "Products",
    route: "/admin/products",
    icon: icons.BsBoxSeam,
  },
];

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [isShrinked, setIsShrinked] = useState(false);

  return (
    <motion.aside
      animate={{ width: isShrinked ? 80 : 200 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={`absolute z-10 lg:relative shrink bg-[hsl(0,0%,13%)] shadow-[0_0_10px_0_rgba(0,0,0,0.1)] px-3 py-6 font-body h-full flex flex-col justify-between transition-transform duration-200
        ${isSidebarOpen ? "translate-x-0" : "max-lg:-translate-x-full"}
        `}
    >
      {/* Logo */}
      {/* <div className="w-32 mx-auto">
        <img src={assets.zantetsu_logo_light} alt="Zantetsu Logo" />
      </div> */}

      {/* Pages */}
      <div className="space-y-1">
        {pages.map((page) => {
          return (
            <NavLink
              to={page.route}
              key={page.name}
              className={({ isActive }) =>
                `flex items-center rounded-md text-sm px-4 py-2.5 transition-colors ${
                  isActive ? "bg-highlight text-bgLight" : "text-bgLight/70"
                }`
              }
            >
              <page.icon className="text-xl shrink-0" />
              <motion.div
                animate={{
                  width: isShrinked ? 0 : "auto",
                  opacity: isShrinked ? 0 : 1,
                  marginLeft: isShrinked ? 0 : 12,
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden whitespace-nowrap"
              >
                {page.name}
              </motion.div>
            </NavLink>
          );
        })}
      </div>

      {/* Dummy Links */}
      <div className="space-y-1 border-t border-bgMuted pt-4 mt-4">
        {[
          { name: "Integrations", icon: icons.IoIosLink },
          { name: "Help", icon: icons.IoIosHelpCircleOutline },
          { name: "Settings", icon: icons.IoSettingsOutline },
        ].map((item) => (
          <div
            key={item.name}
            className={`flex items-center rounded-md text-sm text-bgLight/70 px-4 py-2.5 `}
          >
            <item.icon className="text-xl shrink-0" />
            <motion.div
              animate={{
                width: isShrinked ? 0 : "auto",
                opacity: isShrinked ? 0 : 1,
                marginLeft: isShrinked ? 0 : 12,
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden whitespace-nowrap"
            >
              {item.name}
            </motion.div>
          </div>
        ))}
      </div>
      {/* <div></div> */}

      {/* Shrink Button */}
      <button
        className={`max-lg:hidden absolute bottom-5 right-0 translate-x-1/2 text-xl text-bgLight bg-highlight p-1.5 rounded-full cursor-pointer transition-transform duration-300 ${
          isShrinked ? "" : "rotate-180"
        }`}
        onClick={() => setIsShrinked(!isShrinked)}
      >
        <icons.IoIosArrowForward />
      </button>
    </motion.aside>
  );
}
