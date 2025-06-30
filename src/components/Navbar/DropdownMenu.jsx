import React from "react";
import NavLinkItem from "./NavLinkItem";

const DropDownMenu = ({ title, basePath, links }) => {
  return (
    <div className="relative group">
      <NavLinkItem
        to={basePath}
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-normal" : "text-gray-700"
        }
        label={`${title} ▼`}
      />
      <div className="flex flex-col gap-4 absolute opacity-0 -translate-y-6 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 bg-white border rounded-lg py-8 px-4 w-40 transition-all duration-500">
        {links.map((link) => (
          <NavLinkItem
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-normal" : "text-gray-700"
            }
            label={link.label}
          />
        ))}
      </div>
    </div>
  );
};

export default DropDownMenu;
