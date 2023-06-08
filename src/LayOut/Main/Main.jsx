import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Pages/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../../Component/Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
           <Toaster />
        </>
    );
};

export default Main;