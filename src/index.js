import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./js/App";
import PassagePage from "./js/PassagePage";
import CommentPage from "./js/CommentPage";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/passages",
    element: <PassagePage />,
  },
  {
    path: "/comments",
    element: <CommentPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
