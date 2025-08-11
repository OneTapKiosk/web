import { css } from "@styled-system/css";

export const Container = css({
  h: "full",
  w: "full",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  bg: "gray.50",
});

export const SpinnerStyle = css({
  width: "8rem",
  height: "8rem",
  borderWidth: "8px",
  borderColor: "blue.200",
  borderTopColor: "blue.600",
  borderRadius: "full",
  animation: "spin",
  marginX: "auto",
  marginBottom: "2rem",
});

export const TitleStyle = css({
  fontSize: "3xl",
  fontWeight: "bold",
  color: "gray.800",
  marginBottom: "1rem",
});

export const DescriptionStyle = css({
  fontSize: "xl",
  color: "gray.600",
});
