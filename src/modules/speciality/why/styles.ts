import styled from "styled-components";

export const WhyWrapper = styled.div`
  background: url("/images/backer_circle_gradient.png"), #eeeeee;
`;

export const WhyContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 75px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 0;
  }
`;

export const WhyDescWrapper = styled.div`
  & > :not(:first-child) {
    margin-top: 55px;
  }
  margin-right: 57px;
  h1 {
    font-weight: 600;
    font-size: 30px;
    height: 77px;
    line-height: 123%;
    color: #1e272b;
  }
  p {
    max-width: 453px;
    font-weight: 400;
    font-size: 18px;
    color: #1e272b;
    line-height: 123%;
    display: flex;
    span {
      margin-right: 27px;
      display: flex;
      min-width: 41px;
      height: 41px;
      justify-content: center;
      align-items: center;
      background: #13dec9;
      font-weight: 900;
      font-size: 18px;
      border-radius: 100%;
      line-height: 123%;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-right: 25px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      height: auto;
    }
    & > :not(:first-child) {
      margin-top: 30px;
    }
  }
`;

export const WhyCardWrapper = styled.div`
  background: #ffffff;
  max-width: 622px;
  width: 100%;
  border-radius: 6px;
  padding: 20px 20px 37px;
  color: #1e272b;
  box-sizing: border-box;
  h1 {
    font-weight: 600;
    font-size: 30px;
    line-height: 123%;
  }
  & > :not(:first-child) {
    margin-top: 28px;
  }
  p {
    max-width: 522px;
    height: 74px;
    font-weight: 400;
    font-size: 18px;
    line-height: 123%;
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

export const WhyCheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 28px;
  span {
    color: #13dec9;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 475px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
