import type { RouteObject } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "@/pages/HomePage";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  }
];

export default routes;
