// @import npm modules
import React from "react";

// @import page modules
import {
  Advantages,
  Expertise,
  SpecialityLanding,
  WhyUseNodeJS,
} from "../../modules/speciality";

export const Speciality: React.FC = () => {
  return (
    <div>
      <SpecialityLanding />
      <WhyUseNodeJS />
      <Advantages />
      <Expertise />
    </div>
  );
};
