import FloatingAnimation from "../FloatingAnimation";
import { Container, IconStyle, InnerCircleStyle, OuterCircleStyle } from "./style.css";

export const SuccessAnimation = () => {
  return (
    <div className={Container}>
      <div className={OuterCircleStyle}>
        <div className={InnerCircleStyle}>
          <i className={`ri-check-line ${IconStyle}`} />
        </div>
      </div>
      <FloatingAnimation />
    </div>
  )
}
