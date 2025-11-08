import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Tailwind + tokens
import "@/index.css";

// Import your design system
import Root from "../src/routes/Root";
import ErrorPage from "../src/error-page";
import ButtonShowcase from "../src/routes/ButtonShowcase";
import InputsShowcase from "../src/routes/InputsShowcase";
import TypographyShowcase from "../src/routes/TypographyShowcase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/buttons",
        element: <ButtonShowcase />
      },
      {
        path: "/inputs",
        element: <InputsShowcase />
      },
      {
        path: "/typography",
        element: <TypographyShowcase />
      }
    ]
  }
])

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(
  <App>
  </App>
);
