import { useContext } from "react";
import { UserContext } from "../../Context/AuthPorvider/AuthPorvider";
export const useAuth = () => {
  const auth = useContext(UserContext);
  return auth;
};
