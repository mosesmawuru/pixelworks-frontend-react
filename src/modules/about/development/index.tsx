// @import npm modules
import React from "react";

// @import custom components
import { Button } from "../../../components";

// @import styled-components
import {
  DevelopmentImg,
  DevelopmentTextWrapper,
  DevelopmentWrapper,
} from "./styles";

export const Development: React.FC = () => {
  return (
    <DevelopmentWrapper>
      <DevelopmentTextWrapper>
        <h1>Simple & effective development</h1>
        <p>
          {
            "Our vision is to grow as a significant IT Service Provider to become a leader in the IT Market and provide simple and effective development solutions of Web and Mobile Apps and Custom Software in an ever-evolving global marketplace."
          }
        </p>
        <Button
          label="Get in touch"
          className="get-in-touch"
          width={372}
          height={72}
          fColor="#00433e"
        />
      </DevelopmentTextWrapper>
      <DevelopmentImg>
        <img src="/images/about1.png" alt="" />
      </DevelopmentImg>
    </DevelopmentWrapper>
  );
};
