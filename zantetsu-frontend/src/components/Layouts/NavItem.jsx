import { NavLink } from "react-router-dom";

export function NavItem({ label, Icon, action, style, onClick }) {
  return (
    <div onClick={onClick}>
      <NavLink to={action} onClick={onClick}>
        <div
          className={`flex items-center cursor-pointer hover:text-highlight transition-colors duration-300 ${style}`}
        >
          <span>{label}</span>
          {Icon && <Icon className="text-xl mt-[3px] ml-1" />}
        </div>
      </NavLink>
    </div>
  );
}
