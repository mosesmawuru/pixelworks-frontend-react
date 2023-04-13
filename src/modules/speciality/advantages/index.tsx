// @import npm modules
import React from "react";

// @import styled-components
import {
  AdvantagesCardGrid,
  AdvantagesContainer,
  AdvantagesWrapper,
} from "./styles";

// @import page data
import { advantagesData } from "../data";
import { Button, GradientCard } from "../../../components";

export const Advantages: React.FC = () => {
  return (
    <AdvantagesWrapper>
      <AdvantagesContainer className="container">
        <h1>
          Advantages of using <span>Node.js</span>
        </h1>
        <AdvantagesCardGrid>
          {advantagesData.map((item, key) => (
            <GradientCard key={key} title={item.title} desc={item.desc} />
          ))}
        </AdvantagesCardGrid>
        <Button
          label="Get in touch"
          className="advantage-button"
          width={372}
          height={72}
          fColor="#00433E"
        />
      </AdvantagesContainer>
    </AdvantagesWrapper>
  );
};
