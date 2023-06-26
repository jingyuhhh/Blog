import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Passage from "./Passage/Passage";
import Comment from "./Comment/Comment";
import { useState } from "react";
import Edit from "./Edit/Edit";
import Signin from "./Signin/Signin";
import Register from "./Signin/Register.jsx";
import Single from "./Single/Single";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/passage",
    element: <Passage />,
  },
  {
    path: "/comment",
    element: <Comment />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
  {
    path: "/Signin",
    element: <Signin />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/post",
    element: <Single />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  </React.StrictMode>
);
