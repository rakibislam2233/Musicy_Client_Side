import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import {
  HiAcademicCap,
  HiBookOpen,
  HiHome,
  HiMenuAlt3,
  HiOutlineViewBoards,
  HiUsers,
} from "react-icons/hi";
import { UserContext } from "../../../Component/Context/AuthProvider";
import Logo from "../../../Component/Pages/Shared/Navbar/Logo";
const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [isActive, setActive] = useState("false");
  const isAdmin = true;
  const isInstructor = false;
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogOut = () => {
    navigate("/");
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-900 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Logo></Logo>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button text-white p-4"
        >
          <HiMenuAlt3 className="h-10 w-10" />
        </button>
      </div>
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 top-[85px] md:top-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/*Profile information */}
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
              <h4 className="mx-2 mt-2 font-medium text-gray-800">
                {user?.displayName}
              </h4>
              <p className="mx-2 mt-1 text-sm font-medium text-gray-600 ">
                {user?.email}
              </p>
            </div>
          </div>
          {/* Nav Link */}
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
                  to="/dashboard/manageClass"
                  className={({ isActive }) =>
                    isActive ? " mx-5 px-2" : "mx-5 px-2"
                  }
                >
                  <span className="flex items-center gap-1">
                    <HiBookOpen></HiBookOpen>Add Class
                  </span>
                </NavLink>
                <NavLink
                  to="/dashboard/manageUsers"
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
        </div>
        <div>
          <hr />
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
