// @import npm modules
import React from "react";

// @import page modules
import {
  CoreValues,
  Development,
  GetStarted,
  GetTalking,
} from "../../modules/about";

export const About: React.FC = () => {
  return (
    <div>
      <Development />
      <GetTalking />
      <CoreValues />
      <GetStarted />
    </div>
  );
};
