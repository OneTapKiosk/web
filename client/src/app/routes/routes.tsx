import type { RouteObject } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "@/pages/HomePage";
import OrderPage from "@/pages/OrderPage";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/order",
        element: <OrderPage />
      }
    ]
  }
];

export default routes;
