import { css } from "@styled-system/css";

export const Container = css({
  minHeight: "100vh",
  bg: "gray.50",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export const RowStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  px: 8,
  pb: 40,
  mt: 8,
});

export const PaymentMethodBox = css({
  w: "full",
});
