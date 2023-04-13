// @import npm modules
import React from "react";

// @import page modules
import { SpecialityLanding, WhyUseNodeJS } from "../../modules/speciality";

export const Speciality: React.FC = () => {
  return (
    <div>
      <SpecialityLanding />
      <WhyUseNodeJS />
    </div>
  );
};
