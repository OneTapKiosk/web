import type { RouteObject } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "@/pages/HomePage";
import OrderPage from "@/pages/OrderPage";
import ConfirmPage from "@/pages/ConfirmPage";
import PaymentPage from "@/pages/PaymentPage";

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
      },
      {
        path: "/payment",
        element: <PaymentPage />
      }
    ]
  }
];

export default routes;
