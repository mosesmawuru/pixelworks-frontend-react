// @import npm modules
import React from "react";

// @import styled-components
import {
  FooterAddress,
  FooterContact,
  FooterContactInfo,
  FooterContainer,
  FooterCopyRightText,
  FooterLink,
  FooterLogo,
  FooterNavigation,
  FooterWrapper,
} from "./styles";

// @import page data
import { footerLinks } from "../data";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContactInfo>
          <FooterLogo>
            <img src="/images/footer-logo.png" alt="" />
          </FooterLogo>
          <FooterAddress>
            <p>102 London Road,</p>
            <p>Town</p>
            <p>London</p>
            <p>SW18 aXX</p>
          </FooterAddress>
          <FooterContact>
            <p>+01270 727272</p>
            <p>info@pixelworks.com</p>
          </FooterContact>
          <FooterCopyRightText>
            2023 PIXELWORKS. ALL RIGHTS RESERVED
          </FooterCopyRightText>
        </FooterContactInfo>
        <FooterNavigation>
          {footerLinks.map((item, key) => (
            <FooterLink key={key} to={item.to}>
              {item.label}
            </FooterLink>
          ))}
        </FooterNavigation>
      </FooterContainer>
    </FooterWrapper>
  );
};
