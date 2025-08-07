import type { RouteObject } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "@/pages/HomePage";
import OrderPage from "@/pages/OrderPage";
import ConfirmPage from "@/pages/ConfirmPage";

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
      },
      {
        path: "/confirm",
        element: <ConfirmPage />
      }
    ]
  }
];

export default routes;
