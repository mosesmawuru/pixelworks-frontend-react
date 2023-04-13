import styled from "styled-components";

export const WhyChooseUsWrapper = styled.div`
  background: linear-gradient(
      261.8deg,
      rgba(19, 222, 201, 0.4) 1.67%,
      rgba(15, 59, 58, 0) 56.3%
    ),
    #0f3b3a;
  padding: 69px 0;
`;

export const WhyChooseUsContainer = styled.div`
  max-width: 1300px;
  width: 95%;
  margin: auto;
  h1 {
    font-weight: 400;
    font-size: 36px;
    line-height: 123%;
    color: #ffffff;
    span {
      font-weight: 700;
      color: #13dec9;
    }
  }
`;

export const WhyChooseUsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  margin-top: 23px;
`;

export const WhyChooseUsCard = styled.div`
  background: linear-gradient(197.76deg, #28ada2 12.07%, #00433e 87.87%);
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 55px 40px;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 123%;
  color: #fff;
  h3 {
    font-weight: 700;
    margin-bottom: 33px;
  }
  p {
    font-weight: 400;
  }
`;
