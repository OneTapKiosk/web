import { css } from "@styled-system/css";

export const SummaryContainer = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "stretch",
  gap: 4,
  p: 8,
  position: "fixed",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  bg: "white",
  borderTop: "1px solid",
  borderColor: "gray.200",
  boxShadow: "lg",
  w: "full",
});

export const SummaryLeftColumn = css({
  display: "flex",
  flexDirection: "column",
  pr: 4,
  flex: 1,
});

export const SummaryRightColumn = css({
  display: "flex",
  alignItems: "center",
});

export const SummaryContentStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  mb: "8",
});

export const TotalPriceLabelStyle = css({
  textStyle: "3xl",
  fontWeight: "semibold",
  color: "gray.800",
});

export const PriceAndTimerStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "6",
});

export const TotalPriceStyle = css({
  textStyle: "4xl",
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
  textStyle: "3xl",
  fontWeight: "bold",
  py: "6",
  rounded: "2xl",
  shadow: "lg",
  transform: "scale(1)",
  transition: "transform 300ms ease-in-out",
  cursor: "pointer",
  whiteSpace: "nowrap",
});
