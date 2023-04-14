// @import npm modules
import React from "react";

// @import custom component
import { GradientCard } from "../../../components";

// @import styled-components
import {
  CordValuesContainer,
  CoreValuesGrid,
  CoreValuesWrapper,
} from "./styles";

// @import page data
import { coreValuesData } from "../data";

export const CoreValues: React.FC = () => {
  return (
    <CoreValuesWrapper>
      <CordValuesContainer>
        <h1>
          Our <span>core values</span>
        </h1>
        <CoreValuesGrid>
          {coreValuesData.map((item, key) => (
            <GradientCard className="core-values" {...item} key={key} />
          ))}
        </CoreValuesGrid>
      </CordValuesContainer>
    </CoreValuesWrapper>
  );
};
