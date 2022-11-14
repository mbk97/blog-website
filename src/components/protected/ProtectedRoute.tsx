import React from "react";
import { Navigate } from "react-router-dom";
import useUserData from "../../hooks/useUserData";

const ProtectedRoute = ({ children }: any) => {
  const auth = useUserData();
  return auth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
