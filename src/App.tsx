import React from "react";
import CustomButton from "./components/common/button/Button";
import CustomInput from "./components/common/input/Input";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <CustomButton>Submit</CustomButton>
      <CustomInput type="text" placeholder="Enter your name" />
    </React.Fragment>
  );
};

export default App;
