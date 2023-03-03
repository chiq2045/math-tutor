import { createRoot } from "react-dom/client";
import { App } from "./app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CookieMultiplication } from "./apps/cookie-multiplication";
import { LongAddSub } from "./apps/long-add-sub";
import { StrictMode } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "cookie-multiplication",
        element: <CookieMultiplication />,
      },
      {
        path: "long-addition-subtraction",
        element: <LongAddSub />,
      },
    ],
  },
]);

const container = document.getElementById("app");
const root = createRoot(container as HTMLElement);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
