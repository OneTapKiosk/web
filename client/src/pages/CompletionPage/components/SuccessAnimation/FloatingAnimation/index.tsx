import { Container, IconStyle, IconWrapperBottomLeft, IconWrapperCenterRight, IconWrapperTopRight } from "./style.css";

const FloatingAnimation = () => {
  return (
    <div className={Container}>
      <div className={IconWrapperTopRight}>
        <i className={`ri-heart-fill ${IconStyle({ color: "pink" })}`} />
      </div>
      <div className={IconWrapperBottomLeft}>
        <i className={`ri-star-fill ${IconStyle({ color: "yellow" })}`} />
      </div>
      <div className={IconWrapperCenterRight}>
        <i className={`ri-gift-fill ${IconStyle({ color: "purple" })}`} />
      </div>
    </div>
  );
}

export default FloatingAnimation;
