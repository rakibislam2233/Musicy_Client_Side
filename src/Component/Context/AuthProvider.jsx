import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const auth = getAuth(app);
export const UserContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../Firebase";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const Googleprovider = new GoogleAuthProvider();
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth)
      .then(() => {})
      .catch(() => {});
  };
  const googleLogin = () => {
    return signInWithPopup(auth, Googleprovider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInformation = {
    user,
    createNewUser,
    login,
    logOut,
    loading,
    googleLogin,
  };
  return (
    <UserContext.Provider value={authInformation}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
