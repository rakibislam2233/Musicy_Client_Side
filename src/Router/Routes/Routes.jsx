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
import AdminRoute from "../AdminRoute/AdminRoute";
import AddClass from "../../LayOut/Dashboard/Instructor/AddClass";
import MyClass from "../../LayOut/Dashboard/Instructor/MyClass";
import Errorpage from "../../Component/Errorpage/Errorpage";
import MySelectedClass from "../../LayOut/Dashboard/Student/MySelectedClass";
import MyEnrolledClass from "../../LayOut/Dashboard/Student/MyEnrolledClass";
import InstructorHome from "../../LayOut/Dashboard/Instructor/InstructorHome";
import InstructorRoute from "../InstructorRoute/InstructorRoute";
import Payment from "../../LayOut/Dashboard/Student/Payment/Payment";
import Student from "../../LayOut/Dashboard/Student/Student";
import PaymentHistory from "../../LayOut/Dashboard/Student/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
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
    element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'admin',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path:'manageClass',
        element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
      },
      {
        path:'manageUsers',
        element:<AdminRoute><MangeUser></MangeUser></AdminRoute>
      },
      {
        path:'instructor',
        element:<InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
      },
      {
        path:'addClass',
        element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path:'myClass',
        element:<InstructorRoute><MyClass></MyClass></InstructorRoute>
      },
      {
        path:'student',
        element:<Student></Student>
      },
      {
        path:'selectedClass',
        element:<MySelectedClass></MySelectedClass>
      }
      ,
      {
        path:'payment/:id',
        element:<Payment></Payment>
      }
      ,
      {
        path:'enrolledClass',
        element:<MyEnrolledClass></MyEnrolledClass>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      }
    ]
  }
]);

export default router;
