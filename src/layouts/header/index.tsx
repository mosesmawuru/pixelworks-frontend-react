// @import npm modules
import React from "react";
import { Link } from "react-router-dom";

// @import styled-components
import {
  HeaderLink,
  HeaderLogo,
  HeaderNavigation,
  HeaderWrapper,
} from "./styles";

// @import page data
import { headerLinks } from "../data";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Link to={"/"}>
          <img src="/images/header-logo.png" alt="" />
        </Link>
      </HeaderLogo>
      <HeaderNavigation>
        {headerLinks.map((item, key) => (
          <HeaderLink to={item.to} key={key}>
            {item.label}
          </HeaderLink>
        ))}
      </HeaderNavigation>
    </HeaderWrapper>
  );
};
