import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../Context/AuthProvider";
import { useContext, useState } from "react";
import Logo from "./Logo";
import {HiMenuAlt3} from "react-icons/hi";
const NaviBarLink = () => {
  const { user, logOut } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handelLogOut = () => {
    logOut();
  };
  return (
    <>
      <ul className="items-center text-white hidden space-x-5 lg:flex">
        <li>
          <NavLink
            to="/"
            aria-label="Home"
            title="Home"
            className={({ isActive }) =>
              isActive ? " text-[#FF7703] font-semibold" : "font-semibold"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/instructors"
            aria-label="Instructors"
            title="Instructors"
            className={({ isActive }) =>
              isActive ? " text-[#FF7703] font-semibold" : "font-semibold"
            }
          >
            Instructors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/classes"
            aria-label="Classes"
            title="Classes"
            className={({ isActive }) =>
              isActive ? " text-[#FF7703] font-semibold" : "font-semibold"
            }
          >
            Classes
          </NavLink>
        </li>
        {user ? (
          <>
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                isActive
                  ? " text-[#FF7703] px-4 py-3 font-semibold"
                  : " font-semibold"
              }
            >
              Dashboard
            </NavLink>
            <div>
              <img
                className="w-12 h-12 rounded-full cursor-pointer ring-2 ring-white"
                src={user.photoURL}
                alt=""
              />
            </div>
            <div
              // onClick={signOut}
              className="font-semibold cursor-pointer"
            >
              <button className="py-2 px-6 bg-amber-500 rounded-xl font-semibold hover:bg-amber-400 transition duration-500">
                Logout
              </button>
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="py-2 px-6 bg-amber-500 rounded-xl font-semibold hover:bg-amber-400 transition duration-500">
              Login
            </button>
          </Link>
        )}
      </ul>
      <div className="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          onClick={() => setIsMenuOpen(true)}
        >
          <HiMenuAlt3 className="w-10 h-10 text-white"></HiMenuAlt3>
        </button>
        {isMenuOpen && (
          <div className="absolute z-10 top-0 left-0 w-full">
            <div className="p-5 bg-gray-400 border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
                    <span className="text-xl font-bold tracking-wide  uppercase">
                      <Logo></Logo>
                    </span>
                  </Link>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-8 text-white" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul onClick={() => setIsMenuOpen(false)} className="space-y-4">
                  <li>
                    <NavLink
                      to="/"
                      aria-label="Home"
                      title="Home"
                      className={({ isActive }) =>
                        isActive
                          ? " text-[#FF7703] font-semibold"
                          : "font-semibold"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/instructors"
                      aria-label="Instructors"
                      title="Instructors"
                      className={({ isActive }) =>
                        isActive
                          ? " text-[#FF7703] font-semibold"
                          : "font-semibold"
                      }
                    >
                      Instructors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/classes"
                      aria-label="Classes"
                      title="Classes"
                      className={({ isActive }) =>
                        isActive
                          ? " text-[#FF7703] font-semibold"
                          : "font-semibold"
                      }
                    >
                      Classes
                    </NavLink>
                  </li>
                  {user && (
                    <li>
                      <NavLink
                        to="/dashboard"
                        aria-label="Dashboard"
                        title="Dashboard"
                        className={({ isActive }) =>
                          isActive ? " text-[#FF7703] font-semibold" :"font-semibold"
                        }
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  )}
                  <li>
                    {user ? (
                      <div className="flex gap-2 ">
                        <label>
                          <img
                            className="w-10 h-10 rounded-full ring-2 cursor-pointer"
                            src={user?.photoURL}
                            alt=""
                          />
                        </label>
                        <button
                          className="bg-[#FF7703] py-1.5 px-5 rounded-full"
                          onClick={handelLogOut}
                        >
                          LogOut
                        </button>
                      </div>
                    ) : (
                      <Link to="/login">
                        <button
                          className="bg-[#FF7703] py-1.5 px-8 text-white font-semibold rounded"
                          onClick={handelLogOut}
                        >
                          Login
                        </button>
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NaviBarLink;
