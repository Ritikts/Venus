import React from "react";

export const SidebarNavItem = (props) => {
  return (
    <>
      <li className="py-[14px] pl-[12px] rounded-md hover:bg-color-1 ease-in-out duration-300 sidebar-list hover:scale-[1.1] hover:drop-shadow-2xl">
        <a href="#!" className="flex space-x-5">
          <img src={props.icon} alt="icon" />
          <span className="text-xl font-medium  text-color-3">
            {props.navName}
          </span>
        </a>
      </li>
    </>
  );
};
