import styled from "styled-components";

export const EducationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  margin: auto;
  @media screen and (max-width: 1024px) {
    padding: 30px 0;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EducationTextWrapper = styled.div`
  max-width: 458px;
  width: 100%;
  & > :not(:first-child) {
    margin-top: 57px;
  }
  @media screen and (max-width: 1024px) {
    & > :not(:first-child) {
      margin-top: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const EducationImg = styled.div`
  max-width: 769px;
  img {
    width: 100%;
  }
`;

export const EducationItem = styled.div`
  display: flex;
  div {
    margin-right: 27px;
    min-width: 46px;
    img {
      width: 100%;
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 123%;
  }
`;
