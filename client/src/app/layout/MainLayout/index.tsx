import { Outlet } from "react-router";
import * as s from "./style.css";

const MainLayout = () => {
  return (
    <div className={s.FlexContainer}>
      <div className={s.RelativeContainer}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
