import { createContext, useState, useContext } from "react";
import userService, { getUser, logInUser } from "../services/userServices";

const authContext = createContext(null);
authContext.displayName = "auth-context";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());

  const refreshUser = () => setUser(getUser());

  const logIn = async (credentials) => {
    const response = await logInUser(credentials);
    refreshUser();

    return response;
  };

  const logOut = () => {
    userService.logOut();
    refreshUser();
  };

  return (
    <authContext.Provider
      value={{
        user,
        logIn,
        logOut,
        createUser: userService.createUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
