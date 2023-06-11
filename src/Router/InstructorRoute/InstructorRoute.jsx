
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Component/Context/AuthProvider";
import { useInstructor } from "../../Hook/useInstructor";
const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const [isInstructor,isInstructorLoading] = useInstructor()
  const location = useLocation();
  if (loading||isInstructorLoading) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
      </div>
    );
  }
  if (user&&isInstructor) {
    return children;
  }
  return <Navigate to={"/"} state={{ from: location }}></Navigate>;
};

export default InstructorRoute;
