import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ value, style, path,icons,iconStyle }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className={`${iconStyle} cursor-pointer hover:text-amber-40`} >{icons}</span>
      <NavLink style={style} to={path}>
        {value}
      </NavLink>
    </div>
  );
};

export default NavLinks;
