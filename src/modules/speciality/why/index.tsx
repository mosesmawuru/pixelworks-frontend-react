// @import npm modules
import React from "react";

// @import custom components
import { Checkbox } from "../../../components";

// @import styled-components
import {
  WhyCardWrapper,
  WhyCheckboxGroup,
  WhyContainer,
  WhyDescWrapper,
  WhyWrapper,
} from "./styles";

// @import page data
import { whyCheckboxData, whyDescData } from "../data";

export const WhyUseNodeJS: React.FC = () => {
  return (
    <WhyWrapper>
      <WhyContainer className="container">
        <WhyDescWrapper>
          <h1>{"Why use Node.JS?"}</h1>
          {whyDescData.map((item, key) => (
            <p key={key}>
              <span>{key + 1}</span>
              {item}
            </p>
          ))}
        </WhyDescWrapper>
        <WhyCardWrapper>
          <h1>Top companies using Node.js in their projects</h1>
          <p>
            Node.js has proved itself as a reliable and convienent tool used by
            the worlds most established companies.
          </p>
          <WhyCheckboxGroup>
            {whyCheckboxData.map((item, key) => (
              <Checkbox key={key}>{item}</Checkbox>
            ))}
          </WhyCheckboxGroup>
        </WhyCardWrapper>
      </WhyContainer>
    </WhyWrapper>
  );
};
