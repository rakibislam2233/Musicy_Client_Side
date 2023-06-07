import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../../Component/Pages/Home/Home";
import Login from "../../Component/Auth/Login";
import SignUp from "../../Component/Auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
      path: "/", 
      element: <Home></Home>
     },
    ],
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'signup',
    element:<SignUp></SignUp>
  }
]);

export default router;
