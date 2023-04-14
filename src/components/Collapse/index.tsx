import React, { useState } from "react";
import { Collapse as CollapseBody } from "react-collapse";
import { CollapseBodyText, CollapseHeader, CollapseWrapper } from "./styles";

export type CollapseProps = {
  title?: string;
  desc?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Collapse: React.FC<CollapseProps> = ({ title, desc }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <CollapseWrapper>
      <CollapseHeader onClick={() => setIsOpened((prev) => !prev)}>
        <div>
          <img src="/images/faq.png" alt="" />
          {title}
        </div>
        <img src="/images/plus.png" alt="" />
      </CollapseHeader>
      <CollapseBody isOpened={isOpened}>
        <CollapseBodyText>{desc}</CollapseBodyText>
      </CollapseBody>
    </CollapseWrapper>
  );
};
