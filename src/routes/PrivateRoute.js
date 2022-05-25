import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  localStorage.setItem("last_pathname", pathname + search);
  return user.isAuthenticated ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
