import { css } from "@styled-system/css";

export const Container = {
  red: css({
    h: "full",
    px: 3,
    py: 2,
    rounded: "lg",
    borderWidth: "1px",
    color: "red.600",
    bg: "red.50",
    borderColor: "red.200",
  }),
  orange: css({
    h: "full",
    px: 3,
    py: 2,
    rounded: "lg",
    borderWidth: "1px",
    color: "orange.600",
    bg: "orange.50",
    borderColor: "orange.200",
  }),
  blue: css({
    h: "full",
    px: 3,
    py: 2,
    rounded: "lg",
    borderWidth: "1px",
    color: "blue.600",
    bg: "blue.50",
    borderColor: "blue.200",
    display: "flex",
    justifyContent: "center",
  }),
};

export const FlexBoxStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
});

export const IconStyle = css({
  fontSize: "5xl",
});

export const TimeTextStyle = css({
  fontSize: "5xl",
  fontWeight: "bold",
  textAlign: "center",
});
