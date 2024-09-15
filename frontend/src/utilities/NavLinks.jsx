import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../Context/User.Context/UserContext";

const NavLinks = ({ onClick, value, style, path, icons, iconStyle }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex items-center space-x-2">
      <span className={`${iconStyle} cursor-pointer hover:text-amber-40`}>
        {icons}
      </span>
      <NavLink onClick={onClick} style={style} to={user ? path : "/login"}>
        {value}
      </NavLink>
    </div>
  );
};

export default NavLinks;
