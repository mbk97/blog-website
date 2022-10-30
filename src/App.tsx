import React from "react";
import CreatePost from "./components/createPost/CreatePost";
import Navbar from "./components/navbar/Navbar";
// import Login from "./components/login/Login";
// import ReadMore from "./components/readMore/ReadMore";
// import Signup from "./components/signUp/Signup";
import { GlobalStyle, Layout, NavWrapper } from "./GlobalStyle";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout>
        <NavWrapper>
          <Navbar />
        </NavWrapper>
        <React.Fragment>
          <CreatePost />
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default App;
