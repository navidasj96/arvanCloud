import { Suspense, lazy } from "react";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import { Outlet } from "react-router-dom";

const DashBoardLayout = lazy(
  () => import("../../layouts/dashboard/DashboardLayout")
);
const CDN = lazy(() => import("../../pages/dashboard/CDN"));
const CloudeService = lazy(() => import("../../pages/dashboard/CloudeServer"));
export const DashboardRoutes = [
  {
    path: "/",
    element: (
      <DashboardLayout>
        <Suspense fallback={<div>please wait</div>}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { path: "add-item", element: <CDN /> },
      { path: "cloud-service", element: <CloudeService /> },
    ],
  },
];
