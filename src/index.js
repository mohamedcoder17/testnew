import React from "react";
import ReactDOMClient from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import Homepage from "./components/Homepage";
import Blog from "./pages/Blog";
import Apartment from "./pages/Apartment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/apartment",
    element: <Apartment />,
  },
]);

const container = document.querySelector("#root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
