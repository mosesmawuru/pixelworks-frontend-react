import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.div`
  background: url("/images/backer_circle_gradient_02.png"),
    linear-gradient(88.42deg, #28ada2 -1.93%, rgba(33, 49, 55, 0) 46.68%),
    linear-gradient(269.13deg, #010404 -6.68%, rgba(33, 49, 55, 0) 35.07%),
    #1e272b;
  padding: 100px 0;
  @media screen and (max-width: 520px) {
    padding: 40px 0;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    align-items: flex-start;
  }
`;

export const FooterContactInfo = styled.div`
  & > :not(:first-child) {
    margin-top: 44px;
  }
`;

export const FooterLogo = styled.div`
  max-width: 255px;
  img {
    width: 100%;
  }
`;

export const FooterAddress = styled.div`
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 123%;
    color: #ffffff;
  }
`;

export const FooterContact = styled.div`
  p {
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
    line-height: 123%;
  }
`;

export const FooterCopyRightText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 123%;
  color: rgba(255, 255, 255, 0.7);
`;

export const FooterNavigation = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 110px;
  }
  @media screen and (max-width: 1280px) {
    & > :not(:first-child) {
      margin-left: 80px;
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    & > :not(:first-child) {
      margin-left: 0;
      margin-top: 30px;
    }
    align-items: flex-start;
  }
  @media screen and (max-width: 520px) {
    display: none;
  }
`;

export const FooterLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  line-height: 123%;
`;
