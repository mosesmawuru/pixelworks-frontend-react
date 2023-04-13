import styled from "styled-components";

export const WhyWrapper = styled.div`
  background: url("/images/backer_circle_gradient.png"), #eeeeee;
`;

export const WhyContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 75px 0;
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
`;

export const WhyCardWrapper = styled.div`
  background: #ffffff;
  max-width: 622px;
  width: 100%;
  border-radius: 6px;
  padding: 20px 20px 37px;
  color: #1e272b;
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
`;

export const WhyCheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 28px;
  span {
    color: #13dec9;
  }
`;
