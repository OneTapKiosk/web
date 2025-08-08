// style.css.ts
import { css } from "@styled-system/css";

export const Container = css({
  position: "relative",
  mb: 12,
});

export const OuterCircleStyle = css({
  width: "12rem",
  height: "12rem",
  bg: "green.100",
  rounded: "full",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mb: "8",
});

export const InnerCircleStyle = css({
  width: "8rem",
  height: "8rem",
  bg: "green.500",
  rounded: "full",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: "pulse",
});

export const IconStyle = css({
  fontSize: "6xl",
  color: "white",
});
