import React from "react";
import Users from "../Utilisateurs/User.jsx";
import Enseignements from "../Enseignements/Enseignements.jsx";
import Predicateurs from "../Predicateurs/Predicateurs.jsx";
import Activites from "../Activites/Activites.jsx";
import APropos from "../A Propos/A Propos.jsx";
import Contacts from "../Contacts/Contacts.jsx";
const Sidebar = () => {
  return (
    <div className=" h-screen my-8 justify-center flex flex-col">
      <div
        className="px-6 relative sidebar shadow-2xl
         backdrop:blur-sm rounded-xl 
        h-full 
     flex flex-col justify-center w-fit "
      >
        <Enseignements />
        <Predicateurs />
        <Activites />
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
