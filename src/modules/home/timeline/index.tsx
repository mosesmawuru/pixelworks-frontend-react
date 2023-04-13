// @import npm modules
import React from "react";

// @import custom components
import { GradientCard } from "../../../components";

// @import styled-components
import { TimelineContainer, TimelineGrid, TimelineWrapper } from "./styles";

// @import page data
import { timelineData } from "../data";

export const Timeline: React.FC = () => {
  return (
    <TimelineWrapper>
      <TimelineContainer>
        <h1>
          Your application <span>timeline</span>
        </h1>
        <TimelineGrid>
          {timelineData.map((item, key) => (
            <GradientCard {...item} key={key} />
          ))}
        </TimelineGrid>
      </TimelineContainer>
    </TimelineWrapper>
  );
};
