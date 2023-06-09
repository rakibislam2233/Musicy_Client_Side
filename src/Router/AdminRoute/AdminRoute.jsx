
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Component/Context/AuthProvider";
import { useAdmin } from "../../Hook/useAdmin";
const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const [isAdmin,isAdminLoading] = useAdmin()
  const location = useLocation();
  if (loading||isAdminLoading) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
      </div>
    );
  }
  if (user&&isAdmin) {
    return children;
  }
  return <Navigate to={"/"} state={{ from: location }}></Navigate>;
};

export default AdminRoute;
