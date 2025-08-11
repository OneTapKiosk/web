import { css } from "@styled-system/css";

export const Container = css({
  bg: "white",
  backdropFilter: "blur(4px)",
  rounded: "3xl",
  p: "8",
  mb: "12",
  maxW: "2xl",
  w: "full",
});

export const HeadingStyle = css({
  fontSize: "2xl",
  fontWeight: "bold",
  color: "gray.800",
  mb: "6",
  textAlign: "center",
});

export const WrapperStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4",
});

export const IconStyle = css({
  width: "2rem",
  height: "2rem",
  bg: "green.500",
  rounded: "full",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const TextStyle = css({
  fontSize: "2xl",
  color: "green.700",
  fontWeight: "bold",
});
