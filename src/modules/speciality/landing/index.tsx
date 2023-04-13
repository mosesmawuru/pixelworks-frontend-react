// @import npm modules
import React from "react";

// @import custom components
import { Checkbox, RequestQuoteCard } from "../../../components";

// @import styled-components
import {
  SpecialityCheckboxGroup,
  SpecialityCheckboxGroupWrapper,
  SpecialityLandingContainer,
  SpecialityLandingDescWrapper,
  SpecialityLandingWrapper,
} from "./styles";

// @import page data
import { landingCheckboxData1, landingCheckboxData2 } from "../data";

export const SpecialityLanding: React.FC = () => {
  return (
    <SpecialityLandingWrapper>
      <SpecialityLandingContainer className="container">
        <SpecialityLandingDescWrapper>
          <img src="/images/Speciality Icon.png" alt="" />
          <h1>
            Hire NodeJS
            <br />
            Developer
          </h1>
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis felis placerat, faucibus ante a, lobortis eros. Quisque vulputate nec ligula id commodo. "
            }
          </p>
          <SpecialityCheckboxGroupWrapper>
            <SpecialityCheckboxGroup>
              {landingCheckboxData1.map((item, key) => (
                <Checkbox key={key}>{item}</Checkbox>
              ))}
            </SpecialityCheckboxGroup>
            <SpecialityCheckboxGroup>
              {landingCheckboxData2.map((item, key) => (
                <Checkbox key={key}>{item}</Checkbox>
              ))}
            </SpecialityCheckboxGroup>
          </SpecialityCheckboxGroupWrapper>
        </SpecialityLandingDescWrapper>
        <RequestQuoteCard />
      </SpecialityLandingContainer>
    </SpecialityLandingWrapper>
  );
};
