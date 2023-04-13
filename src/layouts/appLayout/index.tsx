// @import npm modules
import React from "react";

// @import layouts
import { Header, Footer } from "../";

// @import styled-components
import { AppLayoutWrapper } from "./styles";
import { ContactUs } from "../contact";

export const AppLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return (
    <AppLayoutWrapper>
      <Header />
      {children}
      <ContactUs />
      <Footer />
    </AppLayoutWrapper>
  );
};
