import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainComponents from "./script";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/pages/introduction/intro";
import VideoLesson from "./components/pages/introduction/videolesson";
import MyPage from "./components/pages/myPage/MyPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainComponents />} />
      <Route path="/intro" element={<Menu />} />
      <Route path="/videolesson" element={<VideoLesson />} />
      <Route path="/profile" element={<MyPage />} />
    </Routes>
  </BrowserRouter>
);
