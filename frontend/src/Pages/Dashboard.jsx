import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Welcome from "./Welcome";
import Login from "../Auth/Login";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "../utilities/routes";

const Dashboard = () => {


  return (
    <div className="w-screen px-8 h-screen fixed flex justify-between  space-x-4">
        <div className="justify-center  h-screen flex flex-col">
          <Sidebar />
        </div>
        <div className="flex-1  py-4 my-8 sidebar w-full rounded-lg ">
         {/* <Welcome/>  */}
           <Login /> 
          <Router>
          <Routes>
            {
              routes.map((route,index)=>(
                <Route key={index} path={route.path} element={route.element}/>
              ))
            }
          </Routes>
</Router>
        </div>
    </div>
  );
};

export default Dashboard;
