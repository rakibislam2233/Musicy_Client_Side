import React, { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  HiAcademicCap,
  HiBookOpen,
  HiHome,
  HiOutlineViewBoards,
  HiUsers,
} from "react-icons/hi";
import { useAdmin } from "../../Hook/useAdmin";
import { useInstructor } from "../../Hook/useInstructor";
import { UserContext } from "../../Component/Context/AuthProvider";
const Dashboard = () => {
  const  {user} = useContext(UserContext)
  const navigate = useNavigate()
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  const handleLogout = ()=>{
    navigate('/')
  }
  return (
    <div>
      {/* <Sidebar></Sidebar>
      <div className="w-full flex h-screen justify-center items-center">
        <div>
          <Outlet />
        </div>
      </div> */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-gray-900 text-white">
          <div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <h4 className="mx-2 mt-2 font-medium ">
                {user?.displayName}
              </h4>
              <p className="mx-2 mt-1 text-sm font-medium ">
                {user?.email}
              </p>
            </div>
          </div>
          
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="flex flex-col justify-between flex-1 mt-6 space-y-2 font-semibold">
            {isAdmin ? (
              <>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? " mx-5 px-2" : "mx-5 px-2"
                  }
                >
                  <span className="flex items-center gap-1">
                    <HiHome></HiHome> Home
                  </span>
                </NavLink>
                <NavLink
                  to="/dashboard/manageClass"
                  className={({ isActive }) =>
                    isActive ? " mx-5 px-2" : "mx-5 px-2"
                  }
                >
                  <span className="flex items-center gap-1">
                    <HiBookOpen></HiBookOpen> Manage Classes
                  </span>
                </NavLink>
                <NavLink
                  to="/dashboard/manageUsers"
                  className={({ isActive }) =>
                    isActive ? " mx-5 px-2" : "mx-5 px-2"
                  }
                >
                  <span className="flex items-center gap-1">
                    <HiUsers></HiUsers>Manage Users
                  </span>
                </NavLink>
              </>
            ) : isInstructor ? (
              <>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? " mx-5 px-2" : "mx-5 px-2"
                  }
                >
                  <span className="flex items-center gap-1">
                    <HiHome></HiHome> Home
                  </span>
                </NavLink>
                <NavLink
                  to="/dashboard/addClass"
                  className={({ isActive }) =>
                    isActive ? " mx-5 px-2" : "mx-5 px-2"
                  }
                >
                  <span className="flex items-center gap-1">
                    <HiBookOpen></HiBookOpen>Add Class
                  </span>
                </NavLink>
                <NavLink
                  to="/dashboard/myClass"
                  className={({ isActive }) =>
                    isActive ? " mx-5 px-2" : "mx-5 px-2"
                  }
                >
                  <span className="flex items-center gap-1">
                    <HiAcademicCap></HiAcademicCap>My Class
                  </span>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? " mx-5 px-2" : "mx-5 px-2"
                  }
                >
                  <span className="flex items-center gap-1">
                    <HiHome></HiHome> Home
                  </span>
                </NavLink>
                <NavLink
                  to="/dashboard/selectedClass"
                  className={({ isActive }) =>
                    isActive ? " mx-5 px-2" : "mx-5 px-2"
                  }
                >
                  <span className="flex items-center gap-1">
                    <HiBookOpen></HiBookOpen> My Selected Classes
                  </span>
                </NavLink>
                <NavLink
                  to="/dashboard/enrolledClass"
                  className={({ isActive }) =>
                    isActive ? " mx-5 px-2" : "mx-5 px-2"
                  }
                >
                  <span className="flex items-center gap-1">
                    <HiOutlineViewBoards></HiOutlineViewBoards>My Enrolled
                    Classes
                  </span>
                </NavLink>
              </>
            )}
          </div>
          <div>
            <button onClick={handleLogout} className="py-2 px-5 rounded-xl mx-8 bg-amber-500 my-10">Back To Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
