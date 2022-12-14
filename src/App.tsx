import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signUp/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import Snackbar from "./components/snackbar/Snackbar";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Snackbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default App;
