import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Passage from "./pages/Passage/Passage";
import Edit from "./pages/Edit/Edit";
import Single from "./pages/Single/Single";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/passage" element={<Passage />}></Route>
        <Route path="/passage/:id" element={<Single />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
