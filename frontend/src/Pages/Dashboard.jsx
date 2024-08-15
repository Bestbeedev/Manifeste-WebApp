import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";

const Dashboard = () => {
  return (
    <div className="w-screen px-8 h-screen fixed flex justify-between  space-x-4">
      <div className="justify-center  h-screen flex flex-col">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-hidden pb-16 py-4 my-8 sidebar w-full rounded-lg ">
        <div className="flex px-10 py-2 justify-evenly gap-2 items-center">
          <div>
            logo
          </div>
          <div className="w-[80%]">
           <SearchBar /> 
          </div>
           <div>
            autres
           </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
