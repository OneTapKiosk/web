import { css } from "@styled-system/css";

export const InstructionContainer = css({
  mt: "16",
  textAlign: "center",
  bg: "white",
  backdropFilter: "blur(4px)",
  rounded: "2xl",
  p: "8",
  maxW: "2xl",
  mx: "auto",
});

export const TitleStyle = css({
  fontSize: "2xl",
  fontWeight: "semibold",
  color: "gray.800",
  mb: "4",
});

export const StepListStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "3",
  fontSize: "xl",
  color: "gray.700",
});

export const StepItemStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "4",
});

export const StepNumberStyle = css({
  w: "8",
  h: "8",
  bg: "brand.500",
  color: "white",
  rounded: "full",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
});
