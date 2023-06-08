import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../../Component/Pages/Home/Home";
import Login from "../../Component/Auth/Login";
import SignUp from "../../Component/Auth/SignUp";
import Dashboard from "../../LayOut/Dashboard/Dashboard";
import Instructor from "../../Component/Pages/Instructor/Instructor";
import Classes from "../../Component/Pages/Classes/Classes";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ManageClass from "../../LayOut/Dashboard/Admin/ManageClass";
import MangeUser from "../../LayOut/Dashboard/Admin/MangeUser";
import AdminHome from "../../LayOut/Dashboard/Admin/AdminHome";

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
      element:<PrivetRoute><Instructor></Instructor></PrivetRoute>
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
    element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children:[
      {
        path:'',
        element:<AdminHome></AdminHome>
      },
      {
        path:'manageClass',
        element:<ManageClass></ManageClass>
      },
      {
        path:'manageUsers',
        element:<MangeUser></MangeUser>
      }
    ]
  }
]);

export default router;
