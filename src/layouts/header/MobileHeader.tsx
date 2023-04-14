// @import npm modules
import React from "react";
import { IoClose } from "react-icons/io5";

// @import styled-components
import {
  CloseButton,
  MobileHeaderContainer,
  MobileHeaderLink,
  MobileHeaderLinkGroup,
  MobileHeaderWrapper,
  Overlayout,
} from "./styles";
import { headerLinks } from "../data";

export type MobileHeaderProps = {
  isOpened: boolean;
  onCancel?: () => void;
} & React.HTMLAttributes<HTMLElement>;

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  isOpened,
  onCancel,
}) => {
  return (
    <MobileHeaderWrapper isOpened={isOpened}>
      <MobileHeaderContainer isOpened={isOpened}>
        <CloseButton onClick={onCancel}>
          <IoClose size={30} />
        </CloseButton>
        <MobileHeaderLinkGroup>
          {headerLinks.map((item, key) => (
            <MobileHeaderLink key={key} to={item.to}>
              {item.label}
            </MobileHeaderLink>
          ))}
        </MobileHeaderLinkGroup>
      </MobileHeaderContainer>
      <Overlayout onClick={onCancel} />
    </MobileHeaderWrapper>
  );
};
