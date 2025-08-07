import { css } from "@styled-system/css";

export const HeaderContainer = css({
  bg: "white",
  shadow: "sm",
  px: "8",
  py: "6",
  w: "full",
  margin: "0 auto",
});

export const RowStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const BackButton = css({
  w: "12",
  h: "12",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "gray.600",
  fontSize: "3xl",
  _hover: {
    color: "gray.800",
  },
  cursor: "pointer",
});

export const TitleText = css({
  fontFamily: "Pretendard",
  fontSize: "3xl",
  fontWeight: "bold",
  color: "gray.800",
});

export const Spacer = css({
  w: "12",
});
