import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { UserContext } from "../../../Context/AuthProvider";
const DropDown = () => {
  const {user,logOut} = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false);
  const signOut = ()=>{
    logOut()
    setIsOpen(false)
  }
  return (
    <div className="relative">
      <div>
        <div onClick={() => setIsOpen(!isOpen)} className=" ">
          {user ? (
            <div className="">
              {
                user.photoURL ? <img
                className="w-12 h-12 rounded-full cursor-pointer"
                src={user.photoURL}
                alt=""
              /> : <img
                className="w-12 h-12 rounded-full cursor-pointer"
                src="https://i.postimg.cc/tCYRvj1Y/fotor-2023-6-7-10-43-49.png"
                alt=""
              />
              }
            </div>
          ) : (
            <>
            <div>
            <HiMenuAlt3 className="w-10 h-10 text-white block md:hidden" ></HiMenuAlt3>
            <Link to={'/login'}><button className="md:block hidden py-2 px-6 bg-amber-500 rounded-full">Login</button></Link>
            </div>
            </>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-32 bg-white overflow-hidden right-0 top-20 md:top-[75px] text-sm">
          <div className="flex flex-col cursor-pointer">
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive
                  ? " text-[#FF7703] block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  : "block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive
                  ? " text-[#FF7703] block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  : "block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive
                  ? " text-[#FF7703] block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  : "block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              }
            >
              Home
            </NavLink>
            {user ? (
              <>
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) =>
                    isActive
                      ? " text-[#FF7703] px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      : "px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  }
                >
                  Dashboard
                </NavLink>
                <div
                  onClick={signOut}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
