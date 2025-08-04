import { css } from "@styled-system/css";

export const HomePageContainer = css({
  minHeight: "100vh",
  bg: "blue.50",
  _dark: { bg: "gray.800" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  px: "8",
  overflow: "auto",
});

export const LogoText = css({
  textAlign: "center",
  mb: "16",
  fontSize: "6xl",
  fontWeight: "bold",
  color: "brand.700",
});
