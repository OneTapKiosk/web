import { css } from "@styled-system/css";

export const Container = css({
  display: "flex",
  alignItems: "center",
  gap: "6",
  pb: "6",
  borderBottom: "1px solid",
  borderColor: "gray.100",
  _last: {
    borderBottom: "none",
  },
});

export const ImageStyle = css({
  w: "20",
  h: "20",
  objectFit: "cover",
  rounded: "xl",
});

export const InfoBox = css({
  flex: 1,
});

export const NameStyle = css({
  textStyle: "xl",
  fontWeight: "semibold",
  color: "gray.800",
  mb: "1",
});

export const MetaStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "4",
  textStyle: "lg",
  color: "gray.600",
});

export const TotalStyle = css({
  textAlign: "right",
  textStyle: "xl",
  fontWeight: "bold",
  color: "gray.800",
});
