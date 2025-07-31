import type { RouteObject } from "react-router";
import { MainLayout } from "../layout/MainLayout";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <h2>Home Page</h2>
      }
    ]
  }
];

export default routes;
