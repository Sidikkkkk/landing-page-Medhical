import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkItem = ({ to, label, onCloseSidebar }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-blue-600 font-normal" : "text-gray-700"
      }
    >
      <p onClick={onCloseSidebar} className="hover:text-blue-600">{label}</p>
    </NavLink>
  );
};

export default NavLinkItem;
