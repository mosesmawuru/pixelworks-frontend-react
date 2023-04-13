import styled from "styled-components";

export const ExpertiseWrapper = styled.div`
  background: url("/images/backer_circle_gradient_01.png"), #eeeeee;
`;

export const ExpertiseContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 57px 0 102px;
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
  padding: 20px 20px 36px;
  & > :not(:first-child) {
    margin-top: 28px;
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
