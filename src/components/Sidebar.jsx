import NavLinkItem from "./Navbar/NavLinkItem";
import DropDownMenu from "./Navbar/DropdownMenu";
import { navDropdownLinks } from "../data/navDropdownLink";

const Sidebar = ({ menuSidebarClick, openSidebar }) => {
 
  return (
    <>
      <aside
        className={`${
          openSidebar
            ? "fixed translate-x-0 z-[9999] w-[350px] left-0 top-0 bg-white shadow-md min-h-dvh p-8 transition-transform duration-500 ease-in-out"
            : "fixed -translate-x-96 z-[9999] w-[350px] left-0 top-0 bg-white shadow-md min-h-dvh p-8 transition-transform duration-500 ease-in-out"
        }`}
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-4xl font-bold text-blue-600 pb-8">🩺 Medheal</h3>
          <NavLinkItem to={"/"} label={"Home"} onCloseSidebar={menuSidebarClick}></NavLinkItem>
          <NavLinkItem to={"/about"} label={"About"} onCloseSidebar={menuSidebarClick}></NavLinkItem>
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
        </div>
      </aside>
      {openSidebar && (
        <div className="fixed z-[9998] bg-black w-full min-h-dvh opacity-50"></div>
      )}
    </>
  );
};

export default Sidebar;
