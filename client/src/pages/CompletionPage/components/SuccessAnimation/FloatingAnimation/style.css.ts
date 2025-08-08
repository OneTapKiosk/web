import { css, cva } from "@styled-system/css";

export const Container = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

export const IconWrapperTopRight = css({
  position: "absolute",
  top: "1rem",
  right: "1rem",
  animation: "bounce",
  animationDelay: "100ms",
});

export const IconWrapperBottomLeft = css({
  position: "absolute",
  bottom: "1rem",
  left: "1rem",
  animation: "bounce",
  animationDelay: "300ms",
});

export const IconWrapperCenterRight = css({
  position: "absolute",
  top: "50%",
  right: "-2rem",
  animation: "bounce",
  animationDelay: "500ms",
});

export const IconStyle = cva({
  base: {
    fontSize: "3xl",
  },
  variants: {
    color: {
      pink: { color: "pink.400" },
      yellow: { color: "yellow.400" },
      purple: { color: "purple.400" },
    },
  },
});
