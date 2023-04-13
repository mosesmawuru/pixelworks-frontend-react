// @import npm modules
import React from "react";

// @import styled-components
import { ButtonWrapper } from "./styles";

export type ButtonProps = {
  width?: number;
  fColor?: string;
  bgColor?: string;
  label: string;
  height?: number;
} & React.HTMLAttributes<HTMLElement>;

export const Button: React.FC<ButtonProps> = ({
  width,
  fColor,
  bgColor,
  onClick,
  label,
  height,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      style={{
        width: width ? width + "px" : "100%",
        height: height ? height + "px" : "40px",
        color: fColor ? fColor : "#fff",
        background: bgColor ? bgColor : "#13DEC9",
      }}
    >
      {label}
    </ButtonWrapper>
  );
};
