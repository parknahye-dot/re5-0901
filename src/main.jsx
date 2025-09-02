import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom"; // ✅ HashRouter로 교체
import App from "./App";
import App2 from "./App2"; // ✅ 새로 만든 App2
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/app2" element={<App2 />} />
      <Route path="/dashboard" element={<h1>대시보드 페이지</h1>} />
      <Route path="/members" element={<h1>회원 관리 페이지</h1>} />
      <Route path="/settings" element={<h1>설정 페이지</h1>} />
    </Routes>
  </HashRouter>
);
