// @import npm modules
import React from "react";

// @import page modules
import {
  Education,
  FAQ,
  HomeLanding,
  Technologies,
  Timeline,
  WhyChooseUs,
} from "../../modules/home";

export const Home: React.FC = () => {
  return (
    <div>
      <HomeLanding />
      <Technologies />
      <WhyChooseUs />
      <FAQ />
      <Timeline />
      <Education />
    </div>
  );
};
