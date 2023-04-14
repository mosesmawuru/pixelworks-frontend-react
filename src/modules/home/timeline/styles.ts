import styled from "styled-components";

export const TimelineWrapper = styled.div`
  background: url("/images/backer_circle_gradient.png"),
    linear-gradient(
      261.8deg,
      rgba(19, 222, 201, 0.4) 1.67%,
      rgba(15, 59, 58, 0) 56.3%
    ),
    #0f3b3a;
`;

export const TimelineContainer = styled.div`
  max-width: 1261px;
  width: 95%;
  margin: auto;
  padding: 103px 0 93px;
  h1 {
    font-weight: 400;
    font-size: 36px;
    line-height: 123%;
    color: #fff;
    margin-bottom: 73px;
    span {
      color: #13dec9;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 1024px) {
    h1 {
      margin-bottom: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 47px;
  @media screen and (max-width: 1024px) {
    grid-gap: 20px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
