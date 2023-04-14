// @import npm modules
import React from "react";

// @import custom components
import { Collapse } from "../../../components";

// @import styled-components
import { FAQWrapper } from "./styles";

// @import page data
import { faqData } from "../data";

export const FAQ: React.FC = () => {
  return (
    <FAQWrapper>
      <h1>{"FAQ's"}</h1>
      {faqData.map((item, key) => (
        <Collapse {...item} key={key} />
      ))}
    </FAQWrapper>
  );
};
