import { css } from "@styled-system/css";

export const CartContainer = css({
  px: "8",
  pb: "40",
  w: "full",
});

export const EmptyCartContainer = css({
  textAlign: "center",
  py: "20",
  w: "full",
});

export const EmptyCartTextStyle = css({
  fontSize: "2xl",
  color: "gray.500",
});

export const EmptyCartSubtextStyle = css({
  fontSize: "xl",
  color: "gray.400",
  mt: "2",
});

export const CartItem = css({
  bg: "white",
  rounded: "2xl",
  p: "6",
  shadow: "sm",
  border: "1px solid token(colors.gray.200)",
});

export const CartItemContentStyle = css({
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
