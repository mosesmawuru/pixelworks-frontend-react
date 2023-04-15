import styled from "styled-components";

export const TechnologiesWrapper = styled.div`
  background: url("/images/backer_circle_gradient_02.png");
  padding: 60px 0;
`;

export const TechnologiesContainer = styled.div`
  max-width: 1313px;
  width: 95%;
  margin: auto;
  h1 {
    font-weight: 400;
    font-size: 32px;
    line-height: 123%;
    color: #1e272b;
    margin-bottom: 15px;
  }
`;

export const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 13px;
  @media screen and (max-width: 1080px) {
    .empty-div {
      display: none;
    }
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TechnologiesCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 3.49568px 13.9827px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 40px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  div {
    margin-right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 68px;
    height: 68px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 123%;
  }
`;
