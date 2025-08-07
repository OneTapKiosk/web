import { css } from "@styled-system/css";

export const Container = css({
  bg: "white",
  rounded: "2xl",
  p: "8",
  mb: "8",
  w: "full",
});

export const TitleStyle = css({
  fontSize: "2xl",
  fontWeight: "bold",
  color: "gray.800",
  mb: "6",
});

export const RowStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "xl",
  color: "gray.600",
  mb: "2",
});

export const QuantityStyle = css({
  fontWeight: "semibold",
});

export const TotalBoxStyle = css({
  borderTop: "1px solid",
  borderColor: "gray.200",
  pt: "4",
  mt: "4",
});

export const TotalRowStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "2xl",
});

export const TotalLabelStyle = css({
  fontWeight: "semibold",
  color: "gray.800",
});

export const TotalPriceStyle = css({
  fontWeight: "bold",
  color: "blue.600",
});
