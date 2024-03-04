import { lazy } from "react";

const LoginMainPage = lazy(() => import("../../pages/login/index"));

export const LoginRoutes = [
  {
    path: "/login",
    element: <LoginMainPage />,
  },
];
