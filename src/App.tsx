import React from "react";
import Login from "./components/login/Login";
import Signup from "./components/signUp/Signup";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {/* <Login /> */}
      <Signup />
    </React.Fragment>
  );
};

export default App;
