import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

const NavLinkSimple = ({ onClick, value, style, path, icons, iconStyle }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className={`${iconStyle} cursor-pointer hover:text-amber-40`}>
        {icons}
      </span>
      <NavLink onClick={onClick} style={style} to={path}>
        {value}
      </NavLink>
    </div>
  );
};

export default NavLinkSimple;