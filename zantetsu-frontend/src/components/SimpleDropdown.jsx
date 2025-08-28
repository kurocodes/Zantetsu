"use client";

import { useState, useEffect, useRef } from "react";
import { icons } from "../assets/assets";
import { useGeneralContext } from "../context/GeneralContext";

const DropdownMenu = ({ children, trigger, isOpen, setIsOpen }) => {
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTriggerClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={handleTriggerClick} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div
          className="absolute mt-5 w-48 px-5 py-2 rounded-lg shadow-lg bg-bgMuted text-bgLight z-50 animate-in fade-in-0 zoom-in-95 flex flex-col gap-2"
          role="menu"
        >
          {children}
        </div>
      )}
    </div>
  );
};
const DropdownMenuItem = ({ children, onClick }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      if (onClick) onClick();
    }}
    className="hover:text-accentGold cursor-pointer"
    role="menuitem"
  >
    {children}
  </a>
);

const DropdownMenuSeparator = () => (
  <div className="my-1 h-px bg-zinc-200 dark:bg-zinc-700" />
);
export default function SimpleDropdown() {

  const { navigate } = useGeneralContext();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <DropdownMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        trigger={
          <button className="flex items-center gap-2 cursor-pointer hover:text-highlight">
            <span>Action Figures</span>
            <icons.IoIosArrowDown className={`mt-[2px] ${isOpen ? "rotate-180" : ""} transition-all duration-300`} />
          </button>
        }
      >
        <DropdownMenuItem onClick={() => {navigate("/products"); setIsOpen(false)}}>
          Naruto
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {navigate("/products"); setIsOpen(false)}}>
          One Piece
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {navigate("/products"); setIsOpen(false)}}>
          Bleach
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {navigate("/products"); setIsOpen(false)}}>
          Dragon Ball Z
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {navigate("/products"); setIsOpen(false)}}>
          Demon Slayer
        </DropdownMenuItem>
      </DropdownMenu>
    </div>
  );
}
