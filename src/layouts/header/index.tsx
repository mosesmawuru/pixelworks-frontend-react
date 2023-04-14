// @import npm modules
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

// @import styled-components
import {
  HeaderLink,
  HeaderLogo,
  HeaderNavigation,
  HeaderWrapper,
  MobileHeaderNavigation,
} from "./styles";

// @import page data
import { headerLinks } from "../data";
import { MobileHeader } from "./MobileHeader";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <MobileHeaderNavigation>
        <IoMenu
          color="#fff"
          size={30}
          cursor={"pointer"}
          onClick={() => setMenuOpen(true)}
        />
        <MobileHeader isOpened={menuOpen} onCancel={() => setMenuOpen(false)} />
      </MobileHeaderNavigation>
    </HeaderWrapper>
  );
};
