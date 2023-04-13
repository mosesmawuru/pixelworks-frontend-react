// @import npm modules
import React from "react";

// @import custom components
import { Checkbox } from "../../../components";

// @import styled-components
import {
  ExpertiseCardGroup,
  ExpertiseCardWrapper,
  ExpertiseContainer,
  ExpertiseDescGroup,
  ExpertiseDescWrapper,
  ExpertiseWrapper,
} from "./styles";

// @import page data
import { expertiseCardData, expertiseDescData } from "../data";

export const Expertise: React.FC = () => {
  return (
    <ExpertiseWrapper>
      <ExpertiseContainer className="container">
        <ExpertiseDescWrapper>
          <h1>How much time does it take to develop a Node.js Project?</h1>
          <p>
            {
              "There are no specific time limits for Node.js project development. In fact, everything depends on the scope, requirements, and type of the developed solution. However, according to our experience, the average turnaround time is:"
            }
          </p>
          <ExpertiseDescGroup>
            {expertiseDescData.map((item, key) => (
              <Checkbox key={key}>{item}</Checkbox>
            ))}
          </ExpertiseDescGroup>
        </ExpertiseDescWrapper>
        <ExpertiseCardWrapper>
          <h1>Our developers Node.js expertise.</h1>
          <p>We specialise in many forms of Node.js production. </p>
          <ExpertiseCardGroup>
            {expertiseCardData.map((item, key) => (
              <Checkbox key={key}>{item}</Checkbox>
            ))}
          </ExpertiseCardGroup>
        </ExpertiseCardWrapper>
      </ExpertiseContainer>
    </ExpertiseWrapper>
  );
};
