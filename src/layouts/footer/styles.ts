import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.div`
  background: url("/images/backer_circle_gradient_02.png"),
    linear-gradient(88.42deg, #28ada2 -1.93%, rgba(33, 49, 55, 0) 46.68%),
    linear-gradient(269.13deg, #010404 -6.68%, rgba(33, 49, 55, 0) 35.07%),
    #1e272b;
  padding: 100px 0;
`;

export const FooterContainer = styled.div`
  max-width: 1400px;
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterContactInfo = styled.div`
  & > :not(:first-child) {
    margin-top: 44px;
  }
`;

export const FooterLogo = styled.div`
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
`;

export const FooterLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  line-height: 123%;
`;
