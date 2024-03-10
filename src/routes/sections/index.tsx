import { Navigate, createBrowserRouter, useRoutes } from "react-router-dom";
import App from "../../App";
import { DashboardRoutes } from "./dashboard";
import { LoginRoutes } from "./login";

// ----------------------------------------------------------------------

export default function Router() {
  return createBrowserRouter([
    // SET INDEX PAGE WITH SKIP HOME PAGE
    // {
    //   path: '/',
    //   element: <Navigate to={PATH_AFTER_LOGIN} replace />,
    // },

    // ----------------------------------------------------------------------

    // SET INDEX PAGE WITH HOME PAGE

    ...DashboardRoutes,
    ...LoginRoutes,
    // // Auth routes
    // ...authRoutes,
    // ...authDemoRoutes,

    // // Dashboard routes
    // ...dashboardRoutes,

    // // Main routes
    // ...mainRoutes,

    // // Components routes
    // ...componentsRoutes,

    // No match 404
    // {
    //   path: "*",
    //   element: (
    //     <Navigate
    //       to="/404"
    //       replace
    //     />
    //   ),
    // },
  ]);
}
