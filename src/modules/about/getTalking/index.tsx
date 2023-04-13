// @import npm modules
import React from "react";

// @import custom modules
import { Button } from "../../../components";

// @import styled-components
import {
  GetTalkingImg,
  GetTalkingTextWrapper,
  GetTalkingWrapper,
} from "./styles";

export const GetTalking: React.FC = () => {
  return (
    <GetTalkingWrapper>
      <GetTalkingImg>
        <img src="/images/about2.png" alt="" />
      </GetTalkingImg>
      <GetTalkingTextWrapper>
        <h1>{"Let’s get talking."}</h1>
        <p>
          {
            "Join our development team with fast, organized, and quality code. We are proud to offer services for almost all app development from concept to creation."
          }
        </p>
        <Button
          label="Get in touch"
          className="get-in-touch"
          width={372}
          height={72}
          fColor="#00433e"
        />
      </GetTalkingTextWrapper>
    </GetTalkingWrapper>
  );
};
