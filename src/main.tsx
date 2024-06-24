import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

import Dashboard from "./pages/Dashboard.tsx";
import Mentions from "./pages/Mentions.tsx";
import TopSources from "./pages/TopSources.tsx";
import Reports from "./pages/Reports.tsx";
import Analytics from "./pages/Analytics.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },

      {
        path: "/mentions",
        element: <Mentions />,
      },
      {
        path: "/top-sources",
        element: <TopSources />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
