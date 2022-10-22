import React from "react";
import Login from "./components/login/Login";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Login />
    </React.Fragment>
  );
};

export default App;
