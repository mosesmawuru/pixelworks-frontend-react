// @import npm modules
import React from "react";

// @import styled-components
import {
  TechnologiesCard,
  TechnologiesContainer,
  TechnologiesGrid,
  TechnologiesWrapper,
} from "./styles";

// @import page data
import { technologiesData } from "../data";

export const Technologies: React.FC = () => {
  return (
    <TechnologiesWrapper>
      <TechnologiesContainer>
        <h1>Technologies we excel in:</h1>
        <TechnologiesGrid>
          {technologiesData.map((item, key) =>
            item.icon ? (
              <TechnologiesCard key={key}>
                <div>
                  <img src={item.icon} alt="" />
                </div>
                <p>{item.label}</p>
              </TechnologiesCard>
            ) : (
              <div key={key} className="empty-div"></div>
            )
          )}
          <TechnologiesCard>
            <div>
              <img src={"/images/plus.png"} alt="" />
            </div>
            <p>Many more...</p>
          </TechnologiesCard>
        </TechnologiesGrid>
      </TechnologiesContainer>
    </TechnologiesWrapper>
  );
};
