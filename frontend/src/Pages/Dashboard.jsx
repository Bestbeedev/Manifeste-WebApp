import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  
  return (
    <div className="w-screen px-8 h-screen overflow-hidden flex justify-between  space-x-4">
      <div className="justify-between h-screen flex flex-col">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-hidden py-4 my-8 px-8 sidebar w-full rounded-lg ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
