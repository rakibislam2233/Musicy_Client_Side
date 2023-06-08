import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../../Component/Pages/Home/Home";
import Login from "../../Component/Auth/Login";
import SignUp from "../../Component/Auth/SignUp";
import Dashboard from "../../LayOut/Dashboard/Dashboard";
import Instructor from "../../Component/Pages/Instructor/Instructor";
import Classes from "../../Component/Pages/Classes/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
      path: "/", 
      element: <Home></Home>
     },
     {
      path: "/instructors",
      element:<Instructor></Instructor>
     },
     {
      path:'/classes',
      element:<Classes></Classes>
     }
    ],
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'signup',
    element:<SignUp></SignUp>
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>
  }
]);

export default router;
