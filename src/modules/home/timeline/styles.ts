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
`;

export const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 47px;
`;
