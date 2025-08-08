import { css, cva } from "@styled-system/css";

export const Container = cva({
  base: {
    bg: "white",
    rounded: "2xl",
    p: "8",
    mb: 8,
    shadow: "sm",
    borderWidth: "2px",
    borderColor: "gray.200",
    cursor: "pointer",
    transition: "all",
    display: "flex",
    alignItems: "center",
    gap: 6,
    //duration: "300ms",
  },
  variants: {
    color: {
      blue: {
        _hover: {
          borderColor: "blue.400",
          shadow: "md",
        },
      },
      green: {
        _hover: {
          borderColor: "green.400",
          shadow: "md",
        },
      },
    },
  },
});

export const IconBox = cva({
  base: {
    w: "20",
    h: "20",
    rounded: "2xl",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4xl",
  },
  variants: {
    color: {
      blue: {
        bg: "blue.100",
        color: "blue.600",
      },
      green: {
        bg: "green.100",
        color: "green.600",
      },
    },
  },
});

export const ArrowIconBox = css({
  w: "16",
  h: "16",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "3xl",
  color: "gray.400",
});

export const InfoBox = css({
  flex: "1",
});

export const TitleStyle = css({
  fontSize: "3xl",
  fontWeight: "bold",
  color: "gray.800",
  mb: "2",
});

export const DescriptionStyle = css({
  fontSize: "xl",
  color: "gray.600",
  mb: "4",
});

export const InstructionBoxStyle = (color: "blue" | "green") =>
  css({
    bg: `${color}.50`,
    rounded: "lg",
    p: "4",
  });

export const InstructionTextStyle = (color: "blue" | "green") =>
  css({
    fontSize: "lg",
    color: `${color}.800`,
    fontWeight: "semibold",
  });
