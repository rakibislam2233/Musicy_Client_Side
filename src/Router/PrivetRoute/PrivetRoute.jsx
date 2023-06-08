
import { Navigate, useLocation } from "react-router-dom";
// import Lottie from "lottie-react";
import { useContext } from "react";
import { UserContext } from "../../Component/Context/AuthProvider";
// import Spinner from "../../assets/Lotti/loading.json";
const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
        {/* <Lottie animationData={Spinner} loop={true} /> */}
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default PrivetRoute;
