import { css } from "@styled-system/css";

export const Container = css({
  bg: "white",
  rounded: "2xl",
  p: "8",
  mb: "8",
  shadow: "sm",
  w: "full",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const TitleStyle = css({
  fontSize: "2xl",
  fontWeight: "semibold",
  textAlign: "center",
  color: "gray.800",
  mb: "4",
});

export const TotalPriceStyle = css({
  fontSize: "5xl",
  fontWeight: "bold",
  color: "blue.600",
  mb: "2",
});

export const DescriptionStyle = css({
  fontSize: "lg",
  color: "gray.600",
});
