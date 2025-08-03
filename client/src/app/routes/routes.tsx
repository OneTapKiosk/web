import type { RouteObject } from "react-router";
import MainLayout from "../layout/MainLayout";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <div style={{ fontFamily: 'Pretendard', fontSize: '24px', fontWeight: 400 }}>
            폰트 테스트: Pretendard가 잘 적용되었나요?
          </div>
        )
      }
    ]
  }
];

export default routes;
