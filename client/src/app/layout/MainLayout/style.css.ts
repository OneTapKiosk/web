import { css } from "@styled-system/css";

export const FlexContainer = css({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  width: "100vw",
  height: "100vh",
});

export const RelativeContainer = css({
  position: "relative",
  width: "100vw",
  height: "100vh",
});
