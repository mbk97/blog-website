import React from "react";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { LogoutWrapper, LogoutText } from "./style";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.clear();
      navigate("/");
    } else {
      return;
    }
  };

  return (
    <LogoutWrapper onClick={handleLogout}>
      <LogoutText>Logout</LogoutText>
      <BiLogOut className="logout_icon" />
    </LogoutWrapper>
  );
};

export default Logout;
