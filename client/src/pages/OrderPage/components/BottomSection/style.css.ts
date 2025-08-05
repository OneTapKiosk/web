import { css } from "@styled-system/css";

export const SummaryContainer = css({
  position: "fixed",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "white",
  borderTop: "1px solid",
  borderColor: "gray.200",
  boxShadow: "lg",
  p: "8",
  w: "full",
});

export const SummaryContentStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  mb: "6",
});

export const TotalPriceLabelStyle = css({
  textStyle: "2xl",
  fontWeight: "semibold",
  color: "gray.800",
});

export const PriceAndTimerStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "6",
});

export const TotalPriceStyle = css({
  textStyle: "3xl",
  fontWeight: "bold",
  color: "blue.600",
});

export const ConfirmButtonStyle = css({
  width: "full",
  bgGradient: "to-r",
  bg: "blue.500",
  _hover: {
    bg: "blue.600",
    transform: "scale(1.05)",
  },
  color: "white",
  textStyle: "2xl",
  fontWeight: "bold",
  py: "6",
  rounded: "2xl",
  shadow: "lg",
  transform: "scale(1)",
  transition: "transform 300ms ease-in-out",
  cursor: "pointer",
  whiteSpace: "nowrap",
});
