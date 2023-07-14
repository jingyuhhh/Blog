import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Passage from "./Passage/Passage";
import Comment from "./Comment/Comment";
import Edit from "./Edit/Edit";
import Signin from "./Signin/Signin";
import Register from "./Signin/Register.jsx";
import Single from "./Single/Single";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/passage" element={<Passage />}></Route>
      <Route path="/passage/:id" element={<Single />}></Route>
      <Route path="/edit" element={<Edit />}></Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  </React.StrictMode>
);
