import { css } from "@styled-system/css";

export const Container = css({
  bg: "blue.50",
  borderLeft: "4px solid",
  borderColor: "blue.400",
  w: "full",
  p: "6",
  m: "8",
});

export const TitleStyle = css({
  fontSize: "xl",
  fontWeight: "semibold",
  color: "blue.800",
});

export const ContentStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "4",
  "& i": {
    fontSize: "4xl",
    color: "blue.600",
  },
});

export const DescriptionStyle = css({
  fontSize: "lg",
  color: "blue.700",
});
