// @import npm modules
import React from "react";

// @import styled-components
import { GradientCardWrapper } from "./styles";

export type GradientCardProps = {
  icon?: string;
  title?: string;
  desc?: string;
};

export const GradientCard: React.FC<GradientCardProps> = ({
  title,
  desc,
  icon,
}) => {
  return (
    <GradientCardWrapper>
      {icon && (
        <div>
          <img src={icon} alt="" />
        </div>
      )}
      <h4>{title}</h4>
      <p>{desc}</p>
    </GradientCardWrapper>
  );
};
