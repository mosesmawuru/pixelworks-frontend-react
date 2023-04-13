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
`;

export const HeaderLogo = styled.div`
  img {
    width: 100%;
  }
`;

export const HeaderNavigation = styled.div`
  display: flex;
  & > :not(:first-child) {
    margin-left: 110px;
  }
`;

export const HeaderLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  line-height: 123%;
`;
