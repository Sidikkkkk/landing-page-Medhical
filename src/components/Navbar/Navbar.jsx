import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import DropDownMenu from "./DropDownMenu";
import { navDropdownLinks } from "../../data/navDropdownLink";
import NavLinkItem from "./NavLinkItem";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastSacrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(currentScrollY);

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
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">🩺 Medheal</div>
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <NavLinkItem to={'/'} label={"Home"}></NavLinkItem>
          <NavLinkItem to={'/about'} label={"About"}></NavLinkItem>
          <DropDownMenu title={'Pages'} basePath={'/pages'} links={navDropdownLinks.pages}/>
          <DropDownMenu title={'Services'} basePath={'/services'} links={navDropdownLinks.services}/>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700">
          Appointment
        </button>
      </div>
    </header>
  );
};

export default Navbar;
