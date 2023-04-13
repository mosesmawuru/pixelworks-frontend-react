// @import npm modules
import React from "react";

// @import styled-components
import { InputWrapper } from "./styles";

export type InputProps = {
  type?: "textarea" | "input";
  name?: string;
  id?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Input: React.FC<InputProps> = ({
  type = "input",
  name,
  id,
  value,
  defaultValue,
  placeholder,
}) => {
  return (
    <InputWrapper>
      {type === "input" ? (
        <input
          name={name}
          id={id}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          name={name}
          id={id}
          defaultValue={defaultValue}
          placeholder={placeholder}
        >
          {value}
        </textarea>
      )}
    </InputWrapper>
  );
};
