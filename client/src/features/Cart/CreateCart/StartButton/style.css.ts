import { css } from "@styled-system/css";

export const StartButtonStyle = css({
  bg: "brand.500",
  _hover: {
    bg: "brand.600",
    transform: "scale(1.05)",
  },
  color: "white",
  fontFamily: "Pretendard, sans-serif",
  fontSize: "4xl",
  fontWeight: "bold",
  py: "8",
  px: "16",
  rounded: "3xl",
  shadow: "2xl",
  transition: "all 0.3s ease",
  cursor: "pointer",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  gap: "4",
  mb: "12",
});
