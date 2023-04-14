import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  height: 152px;
  background: linear-gradient(
      88.42deg,
      #28ada2 -1.93%,
      rgba(33, 49, 55, 0) 46.68%
    ),
    linear-gradient(269.13deg, #010404 -6.68%, rgba(33, 49, 55, 0) 35.07%),
    #1e272b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px;
  @media screen and (max-width: 1280px) {
    width: 100%;
    padding: 0 2%;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1024px) {
    height: 100px;
  }
`;

export const HeaderLogo = styled.div`
  img {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    img {
      width: 70%;
    }
  }
`;

export const HeaderNavigation = styled.div`
  display: flex;
  & > :not(:first-child) {
    margin-left: 110px;
  }
  @media screen and (max-width: 1440px) {
    & > :not(:first-child) {
      margin-left: 70px;
    }
  }
  @media screen and (max-width: 1280px) {
    & > :not(:first-child) {
      margin-left: 35px;
    }
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HeaderLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  line-height: 123%;
`;

export const MobileHeaderNavigation = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const MobileHeaderWrapper = styled.div<{ isOpened: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #00000080;
  backdrop-filter: blur(2px);
  visibility: ${({ isOpened }) => (isOpened ? "visible" : "hidden")};
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
`;

export const MobileHeaderContainer = styled.div<{ isOpened: boolean }>`
  left: ${({ isOpened }) => (isOpened ? "0" : "-320px")};
  width: 320px;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  z-index: 1;
`;

export const Overlayout = styled.div`
  position: fixed;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  display: flex;
`;

export const MobileHeaderLinkGroup = styled.div`
  padding: 80px 0 0 30px;
`;

export const MobileHeaderLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 500;
  width: fit-content;
  color: #000;
`;
