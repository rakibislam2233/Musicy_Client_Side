
import { NavLink } from "react-router-dom";

const Link = () => {
    return (
        <>
           <ul className="items-center text-white hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) =>
                  isActive ? " text-[#FF7703]" : "default"
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
                  isActive ? " text-[#FF7703]" : "default"
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
                  isActive ? " text-[#FF7703]" : "default"
                }
              >
               Classes
              </NavLink>
            </li>
          </ul> 
        </>
    );
};

export default Link;