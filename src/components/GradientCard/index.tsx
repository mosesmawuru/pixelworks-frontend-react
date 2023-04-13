// @import npm modules
import React from "react";

// @import styled-components
import { GradientCardWrapper } from "./styles";

export type GradientCardProps = {
  icon?: string;
  title?: string;
  desc?: string | Array<string>;
} & React.HTMLAttributes<HTMLElement>;

export const GradientCard: React.FC<GradientCardProps> = ({
  title,
  desc,
  icon,
  className,
}) => {
  return (
    <GradientCardWrapper className={className}>
      {icon && (
        <div>
          <img src={icon} alt="" />
        </div>
      )}
      <h4>{title}</h4>
      {Array.isArray(desc) ? (
        <ul>
          {desc.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{desc}</p>
      )}
    </GradientCardWrapper>
  );
};
