// @import npm modules
import React from "react";

// @import custom components
import { Button } from "../../../components";

// @import styled-components
import {
  GetStartedImg,
  GetStartedTextWrapper,
  GetStartedWrapper,
} from "./styles";

export const GetStarted: React.FC = () => {
  return (
    <GetStartedWrapper>
      <GetStartedTextWrapper>
        <h1>Let's get started with your project</h1>
        <p>
          {
            "Do you need modern desktop or mobile software? Highly scalable web application? Or even a comprehensive solution? We are here to help."
          }
        </p>
        <Button
          label="Get in touch"
          className="get-in-touch"
          width={372}
          height={72}
          fColor="#00433e"
        />
      </GetStartedTextWrapper>
      <GetStartedImg>
        <img src="/images/about3.png" alt="" />
      </GetStartedImg>
    </GetStartedWrapper>
  );
};
