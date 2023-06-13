import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Pages/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../../Component/Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="overflow-hidden">
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
           <Toaster />
        </div>
    );
};

export default Main;