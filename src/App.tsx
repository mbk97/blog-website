import React from "react";
import Latest from "./components/latest/Latest";
import CreatePost from "./components/createPost/CreatePost";
import Navbar from "./components/navbar/Navbar";
// import Login from "./components/login/Login";
// import ReadMore from "./components/readMore/ReadMore";
// import Signup from "./components/signUp/Signup";
import { GlobalStyle, Layout, NavWrapper } from "./GlobalStyle";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ForgotPassword />
      {/* <Layout>
        <NavWrapper>
          <Navbar />
        </NavWrapper>
        <React.Fragment>
          <Latest />
        </React.Fragment>
      </Layout> */}
    </React.Fragment>
  );
};

export default App;
