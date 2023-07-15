import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./Home/Home";
import Passage from "./Passage/Passage";
import Edit from "./Edit/Edit";
import Single from "./Single/Single";

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
