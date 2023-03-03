import { createRoot } from "react-dom/client";
import { App } from "./app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, StrictMode, Suspense } from "react";

const CookieMultiplication = lazy(() =>
  import("./apps/cookie-multiplication").then((module) => ({
    default: module.CookieMultiplication,
  }))
);
const LongAddSub = lazy(() =>
  import("./apps/long-add-sub").then((module) => ({
    default: module.LongAddSub,
  }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "cookie-multiplication",
        element: (
          <Suspense fallback={<div>...Loading</div>}>
            <CookieMultiplication />
          </Suspense>
        ),
      },
      {
        path: "long-addition-subtraction",
        element: (
          <Suspense fallback={<div>...Loading</div>}>
            <LongAddSub />
          </Suspense>
        ),
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
