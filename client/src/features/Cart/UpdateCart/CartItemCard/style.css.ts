import { css } from "@styled-system/css";

export const Container = css({
  bg: "white",
  rounded: "2xl",
  p: "6",
  shadow: "sm",
  border: "1px solid token(colors.gray.200)",
});

export const ContentStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "6",
});

export const ProductImageStyle = css({
  w: "24",
  h: "24",
  objectFit: "cover",
  rounded: "xl",
});

export const ProductInfoStyle = css({
  flex: "1",
});

export const ProductNameStyle = css({
  fontSize: "2xl",
  fontWeight: "semibold",
  color: "gray.800",
  mb: "2",
});

export const ProductPriceStyle = css({
  fontSize: "xl",
  color: "gray.600",
});

export const AmountControlsStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "4",
});

export const AmountButtonStyle = css({
  w: "12",
  h: "12",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bg: "gray.100",
  rounded: "full",
  _hover: {
    bg: "gray.200",
  },
  cursor: "pointer",
});

export const AmountDisplayStyle = css({
  fontSize: "2xl",
  fontWeight: "semibold",
  w: "8",
  textAlign: "center",
});

export const TotalPriceContainer = css({
  textAlign: "right",
});

export const TotalPriceTextStyle = css({
  fontSize: "2xl",
  fontWeight: "bold",
  color: "blue.600",
});
