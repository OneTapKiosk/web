import { css } from "@styled-system/css";

export const Container = css({
  bg: "blue.500",
  _hover: {
    bg: "blue.600",
    transform: "scale(1.05)",
  },
  color: "white",
  fontSize: "2xl",
  fontWeight: "bold",
  py: "6",
  px: "12",
  rounded: "2xl",
  shadow: "lg",
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  gap: "4",
});
