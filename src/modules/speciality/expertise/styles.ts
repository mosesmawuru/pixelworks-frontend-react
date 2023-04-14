import styled from "styled-components";

export const ExpertiseWrapper = styled.div`
  background: url("/images/backer_circle_gradient_01.png"), #eeeeee;
`;

export const ExpertiseContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 57px 0 102px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 0;
  }
`;

export const ExpertiseDescWrapper = styled.div`
  padding-top: 13px;
  color: #1e272b;
  margin-right: 57px;
  h1 {
    max-width: 441px;
    font-weight: 600;
    font-size: 30px;
    line-height: 123%;
    height: 151px;
  }
  p {
    max-width: 453px;
    font-weight: 400;
    font-size: 18px;
    line-height: 123%;
  }
  & > :not(:first-child) {
    margin-top: 13px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      height: auto;
    }
  }
`;

export const ExpertiseDescGroup = styled.div`
  span {
    color: #13dec9;
  }
  & > :not(:first-child) {
    margin-top: 13px;
  }
`;

export const ExpertiseCardWrapper = styled.div`
  max-width: 622px;
  width: 100%;

  background: #ffffff;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 20px 20px 36px;
  & > :not(:first-child) {
    margin-top: 28px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 50%;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-top: 30px;
  }
  @media screen and (max-width: 475px) {
    p {
      height: auto;
    }
  }
`;

export const ExpertiseCardGroup = styled.div`
  span {
    color: #13dec9;
  }
  & > :not(:first-child) {
    margin-top: 28px;
  }
`;
