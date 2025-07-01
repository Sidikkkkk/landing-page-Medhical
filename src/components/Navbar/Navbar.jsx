import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import DropDownMenu from "./DropdownMenu";
import { navDropdownLinks } from "../../data/navDropdownLink";
import NavLinkItem from "./NavLinkItem";
import Sidebar from "../Sidebar";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastSacrollY] = useState(0);

  const handleClickSidebar = (e) => {
    setIsOpen((open) => (open = !open));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else if (currentScrollY < lastScrollY) {
        setShow(true);
      }
      setLastSacrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">🩺 Medheal</div>
          <nav className="hidden lg:flex gap-6 text-gray-700 font-medium">
            <NavLinkItem to={"/"} label={"Home"} />
            <NavLinkItem to={"/about"} label={"About"} />
            <DropDownMenu
              title={"Pages"}
              basePath={"/pages"}
              links={navDropdownLinks.pages}
            />
            <DropDownMenu
              title={"Services"}
              basePath={"/services"}
              links={navDropdownLinks.services}
            />
          </nav>
          <div className="flex gap-4">
            <button className="hidden md:block lg:block bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700">
              Appointment
            </button>
            <button className="block lg:hidden" onClick={handleClickSidebar}>
              <AlignJustify />
            </button>
          </div>
        </div>
      </header>
      <Sidebar menuSidebarClick={handleClickSidebar} openSidebar={isOpen} />
    </>
  );
};

export default Navbar;
