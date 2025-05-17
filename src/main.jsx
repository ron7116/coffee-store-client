import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import AddCoffee from "./pages/AddCoffee";
import Home from "./pages/Home";
import UpdateCoffee from "./pages/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/addCoffee", Component: AddCoffee },
      { path: "/updateCoffee", Component: UpdateCoffee },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
