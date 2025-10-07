import { NavLink } from "react-router-dom";
import { assets, icons } from "../../../assets/assets";

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

export default function Sidebar() {
  return (
    <aside className="min-w-[200px] shrink bg-[hsl(0,0%,13%)] px-4 font-body">
      {/* Logo */}
      <div className="w-32 mx-auto">
        <img src={assets.zantetsu_logo_light} alt="Zantetsu Logo" />
      </div>

      {/* Pages */}
      <div className="space-y-1">
        {pages.map((page) => {
          return (
            <NavLink
              to={page.route}
              key={page.name}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-md text-sm ${
                  isActive ? "bg-highlight text-bgLight" : "text-bgLight/70"
                }`
              }
            >
              <page.icon className="text-xl" />
              <span>{page.name}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Dummy Content */}
      <div className="space-y-1 border-t border-bgMuted pt-4 mt-4">
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-md text-sm text-bgLight/70">
          <icons.IoIosLink className="text-xl" />
          <span>Integrations</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-md text-sm text-bgLight/70">
          <icons.IoIosHelpCircleOutline className="text-xl" />
          <span>Help</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-md text-sm text-bgLight/70">
          <icons.IoSettingsOutline className="text-xl" />
          <span>Settings</span>
        </div>
      </div>
      <div></div>
    </aside>
  );
}
