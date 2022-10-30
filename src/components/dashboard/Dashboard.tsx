import React from "react";
import { Layout, NavWrapper } from "../../GlobalStyle";
import Latest from "../latest/Latest";
import Navbar from "../navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import CreatePost from "../createPost/CreatePost";
import ReadMore from "../readMore/ReadMore";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <NavWrapper>
          <Navbar />
        </NavWrapper>
        <React.Fragment>
          <Routes>
            <Route path="/latest" element={<Latest />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/read-more" element={<ReadMore />} />
          </Routes>
        </React.Fragment>
      </Layout>
    </div>
  );
};

export default Dashboard;
