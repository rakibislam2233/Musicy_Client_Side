import React, { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  HiAcademicCap,
  HiBookOpen,
  HiClipboard,
  HiHome,
  HiOutlineViewBoards,
  HiUsers,
} from "react-icons/hi";
import { useAdmin } from "../../Hook/useAdmin";
import { useInstructor } from "../../Hook/useInstructor";
import { UserContext } from "../../Component/Context/AuthProvider";
import { Toaster } from "react-hot-toast";
const Dashboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-gray-900 text-white">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="hidden md:block bg-gray-900">
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <h4 className="mx-2 mt-2 font-medium ">{user?.displayName}</h4>
              <p className="mx-2 mt-1 text-sm font-medium ">{user?.email}</p>
            </div>
          </div>
          <ul className="menu w-52 text-white ">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/admin"
                    className={({ isActive }) =>
                      isActive ? " mx-5 px-2" : "mx-5 px-2"
                    }
                  >
                    <span className="flex items-center gap-1">
                      <HiHome></HiHome> Admin Home
                    </span>
                  </NavLink>
                </li>
                <li>
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
                </li>
                <li>
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
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/instructor"
                    className={({ isActive }) =>
                      isActive ? " mx-5 px-2" : "mx-5 px-2"
                    }
                  >
                    <span className="flex items-center gap-1">
                      <HiHome></HiHome> Instructor Home
                    </span>
                  </NavLink>
                </li>
                <li>
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
                </li>
                <li>
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
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/dashboard/student"
                    className={({ isActive }) =>
                      isActive ? " mx-5 px-2" : "mx-5 px-2"
                    }
                  >
                    <span className="flex items-center gap-1">
                      <HiHome></HiHome>Student Home
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/selectedClass"
                    className={({ isActive }) =>
                      isActive ? " mx-5 px-2" : "mx-5 px-2"
                    }
                  >
                    <span className="flex items-center gap-1">
                      <HiBookOpen></HiBookOpen> Selected Class
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/enrolledClass"
                    className={({ isActive }) =>
                      isActive ? " mx-5 px-2" : "mx-5 px-2"
                    }
                  >
                    <span className="flex items-center gap-1">
                      <HiOutlineViewBoards></HiOutlineViewBoards>Enrolled
                      Class
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className={({ isActive }) =>
                      isActive ? " mx-5 px-2" : "mx-5 px-2"
                    }
                  >
                    <span className="flex items-center gap-1">
                      <HiClipboard></HiClipboard>Payment History
                    </span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className="hidden md:block">
          <button onClick={handleLogout} className="py-2 px-5 rounded-xl mx-8 bg-amber-500 my-10">Back To Home</button>
          </div>
        </div>
        
      </div>
      <Toaster></Toaster>
    </>
  );
};

export default Dashboard;
