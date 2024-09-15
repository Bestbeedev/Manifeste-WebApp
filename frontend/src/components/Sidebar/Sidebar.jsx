import React from "react";
import Users from "../Utilisateurs/User.jsx";
import Enseignements from "../Enseignements/Enseignements.jsx";
import Predicateurs from "../Predicateurs/Predicateurs.jsx";
import Activites from "../Activites/Activites.jsx";
import APropos from "../A Propos/A Propos.jsx";
import Contacts from "../Contacts/Contacts.jsx";
import logo from "../../assets/logo.png";
const Sidebar = () => {
  return (
    <div className=" h-screen my-8 space-y-4 justify-between flex flex-col">
      <div
        className="px-6 py-0 my-auto relative sidebar shadow-2xl
         backdrop:blur-sm rounded-xl 
        h-full flex flex-col justify-center w-full "
      >
        <div className="rounded-md mb-5 w-full">
          <img
            className=" size-20  rounded-md shadow-md"
            src={logo}
            alt=""
          />
        </div>
        <Enseignements />
        <Predicateurs />
        <APropos />
        <Contacts />
        <div className="card mb-3 mt-3 py-2 rounded-md">
          <Users />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
