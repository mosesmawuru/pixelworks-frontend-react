import styled from "styled-components";

export const HomeLandingWrapper = styled.div`
  background: url("/images/home.png");
`;

export const HomeLandingContainer = styled.div`
  display: flex;
  padding: 130px 0 160px;
  width: fit-content;
  margin: auto;
`;

export const HomeLandingTextWrapper = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 150px;
  color: #fff;
  h1 {
    font-weight: 600;
    font-size: 42px;
    margin-bottom: 34px;
    line-height: 123%;
  }
  p {
    width: 654px;
    font-weight: 400;
    margin-bottom: 34px;
    font-size: 24px;
    line-height: 123%;
  }
  span {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
    font-size: 16px;
    line-height: 123%;
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 11px;
    justify-content: center;
    & > :not(:first-child) {
      margin-left: 32px;
    }
  }
`;

export const HomeLandingCard = styled.div`
  max-width: 472px;
  min-width: 472px;
  & > div {
    position: absolute;
    width: 100%;
  }
  position: relative;
`;
