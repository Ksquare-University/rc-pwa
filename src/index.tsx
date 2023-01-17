import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import Home from "./components/Home";
import Login from "./components/Login";
import NotAble from "./components/NotAble";

const container = document.getElementById("root")!;
const root = createRoot(container);

// const router = createBrowserRouter([
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "notAble",
        element: <NotAble />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
