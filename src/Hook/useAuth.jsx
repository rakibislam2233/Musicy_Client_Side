import { useContext } from "react";
import { UserContext } from "../Component/Context/AuthProvider";

const useAuth = () => {
    const auth = useContext(UserContext);
    return auth;
}

export default useAuth;