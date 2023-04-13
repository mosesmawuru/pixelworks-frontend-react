import styled from "styled-components";

export const SpecialityLandingWrapper = styled.div`
  background: url("/images/backer_circle_gradient_02.png"),
    url("/images/illustration_app development.png"),
    linear-gradient(
      261.8deg,
      rgba(19, 222, 201, 0.4) 1.67%,
      rgba(15, 59, 58, 0) 56.3%
    ),
    #0f3b3a;
`;

export const SpecialityLandingContainer = styled.div`
  padding: 74px 0;
  display: flex;
  justify-content: space-between;
`;

export const SpecialityLandingDescWrapper = styled.div`
  & > :not(:first-child) {
    margin-top: 19px;
  }
  color: #ffffff;
  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 123%;
  }
  p {
    font-weight: 400;
    line-height: 123%;
    font-size: 18px;
    margin-bottom: 30px;
    max-width: 745px;
    width: 100%;
  }
`;

export const SpecialityCheckboxGroup = styled.div`
  & > :not(:first-child) {
    margin-top: 19px;
  }
`;

export const SpecialityCheckboxGroupWrapper = styled.div`
  display: flex;
  & > :not(:first-child) {
    margin-left: 40px;
  }
`;
