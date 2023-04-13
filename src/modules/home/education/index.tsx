// @import npm modules
import React from "react";

// @import styled-components
import {
  EducationImg,
  EducationTextWrapper,
  EducationWrapper,
  EducationItem,
} from "./styles";
import { educationData } from "../data";

export const Education: React.FC = () => {
  return (
    <EducationWrapper>
      <EducationTextWrapper>
        <h1>Dolor sit amet, consectetur adipiscing elit.</h1>
        {educationData.map((item, key) => (
          <EducationItem key={key}>
            <div>
              <img src={item.icon} alt="" />
            </div>
            <p>{item.text}</p>
          </EducationItem>
        ))}
      </EducationTextWrapper>
      <EducationImg>
        <img src="/images/education.png" alt="" />
      </EducationImg>
    </EducationWrapper>
  );
};
