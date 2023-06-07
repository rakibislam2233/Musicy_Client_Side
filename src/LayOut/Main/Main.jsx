import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Pages/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Toaster />
        </>
    );
};

export default Main;