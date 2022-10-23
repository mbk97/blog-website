import React from "react";
import Login from "./components/login/Login";
import ReadMore from "./components/readMore/ReadMore";
import Signup from "./components/signUp/Signup";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {/* <Login /> */}
      {/* <Signup /> */}
      <ReadMore />
    </React.Fragment>
  );
};

export default App;
