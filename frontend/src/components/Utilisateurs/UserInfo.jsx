import React, { useContext, useState } from "react";
import NavLinks from "../../utilities/NavLinks";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import Activites from "../Activites/Activites";
import UserContext from "../../Context/User.Context/UserContext";
import { useEffect } from "react";
import { GrUpload } from "react-icons/gr";
const UserInfo = () => {

  const [adminIn, setAdminIn] = useState(false);
  const { user, logoutUser } = useContext(UserContext);

  useEffect(() => {
    if (user && user.role === "superadmin") {
      setAdminIn(true);
    }
  }, [user]);

  return (
    <div className="bg-[#242a34] rounded-lg  flex flex-col p-6 space-y-2 absolute right-12 top-0">
      <NavLinks icons={<CgProfile />} value={"Mon profil"} path={"/"} />
      <Activites />
      {adminIn && (
        <NavLinks
          icons={<GrUpload/>}
          value={"Postage"}
          path={"/management-upload-videos"}
        />
      )}
      <NavLinks
        icons={<CiLogout />}
        onClick={logoutUser}
        value={"Deconnexion"}
        path={"/logout"}
      />
    </div>
  );
};

export default UserInfo;
