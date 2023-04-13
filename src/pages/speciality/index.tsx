// @import npm modules
import React from "react";

// @import page modules
import {
  Advantages,
  SpecialityLanding,
  WhyUseNodeJS,
} from "../../modules/speciality";

export const Speciality: React.FC = () => {
  return (
    <div>
      <SpecialityLanding />
      <WhyUseNodeJS />
      <Advantages />
    </div>
  );
};
