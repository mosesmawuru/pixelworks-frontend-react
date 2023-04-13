// @import npm modules
import React from "react";
import { BiCheck } from "react-icons/bi";

// @import styled-components
import { CheckboxWrapper } from "./styles";

export type CheckboxProps = {} & React.HTMLAttributes<HTMLElement>;

export const Checkbox: React.FC<CheckboxProps> = ({ children }) => {
  return (
    <CheckboxWrapper>
      <span>
        <BiCheck size={37} />
      </span>
      {children}
    </CheckboxWrapper>
  );
};
