// @import npm modules
import React from "react";

// @import styled-components
import {
  WhyChooseUsCard,
  WhyChooseUsContainer,
  WhyChooseUsGrid,
  WhyChooseUsWrapper,
} from "./styles";

// @import page data
import { whyChooseUsData } from "../data";

export const WhyChooseUs: React.FC = () => {
  return (
    <WhyChooseUsWrapper>
      <WhyChooseUsContainer>
        <h1>
          Why <span>choose us?</span>
        </h1>
        <WhyChooseUsGrid>
          {whyChooseUsData.map((item, key) => (
            <WhyChooseUsCard key={key}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </WhyChooseUsCard>
          ))}
        </WhyChooseUsGrid>
      </WhyChooseUsContainer>
    </WhyChooseUsWrapper>
  );
};
