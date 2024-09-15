import React, { useContext, useEffect, useRef, useState } from "react";
import profil from "../../../src/assets/profile.jpg";
import UserInfo from "./UserInfo";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import UserContext from "../../Context/User.Context/UserContext";
import { redirect, useNavigate } from "react-router-dom";
const User = () => {
  const [open, setIsOpen] = useState(false);
  const profilRef = useRef(null);
  const modalProfil = useRef(null);
  const { user } = useContext(UserContext);

  if (!user) {
    redirect("/login");
    console.log("Utilisateur null");
  }


  const windowClick = () => {
    window.addEventListener("click", (e) => {
      if (e.target !== modalProfil.current && e.target === profilRef.current) {
        setIsOpen(!open);
      }
    });
  };
  const handleProfil = () => {
    setIsOpen(!open);
    windowClick();
  };

  return (
    <>
      <div className="flex cursor-pointer relative items-center space-x-12">
        <div className="px-3 flex space-x-3 items-center">
          <span className="rounded-full">
            <img
              onClick={handleProfil}
              className="rounded-full object-cover size-12"
              src={profil}
              alt=""
            />
          </span>
          {user ? (
            <span>
              <p className="font-semibold">{user.name}</p>
              <p className="">Admin</p>
            </span>
          ) : (
            <span>
              <p className="font-semibold">User-XY</p>
              <p className="">Admin</p>
            </span>
          )}

          <span
            onClick={handleProfil}
            ref={profilRef}
            className="bg-green-500 rounded-md "
          >
            {open ? (
              <RiArrowDropUpLine className="size-6" style={20} />
            ) : (
              <RiArrowDropDownLine className="size-6" style={20} />
            )}
          </span>
        </div>
        {open && (
          <div
            ref={modalProfil}
            className="absolute w-full translate-x-1 shadow-xl z-50 -translate-y-[260px] "
          >
            <UserInfo />
          </div>
        )}
      </div>
    </>
  );
};

export default User;
