import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from '../Dashboard/Sidebar/Sidebar'
const Dashboard = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="w-full flex h-screen justify-center items-center">
        <div>
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
