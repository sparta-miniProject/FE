import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Main from "../pages/Main";
import Post from "../pages/Post";
import Edit from "../pages/Edit";
import AllList from "../pages/AllList";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* // 지우지말고 주석 풀고 사용 부탁드립니다! import 잊지마시구요! */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          {/* <Route path="logout" element={<Main />} /> 이건 아닐 수도 */}

          <Route path="/main" element={<Main />} />

          <Route path="post" element={<Post />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="lists" element={<AllList />} />
          <Route path="lists/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
