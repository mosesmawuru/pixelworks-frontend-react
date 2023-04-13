import styled from "styled-components";

export const AdvantagesWrapper = styled.div`
  background: linear-gradient(
      261.8deg,
      rgba(19, 222, 201, 0.4) 1.67%,
      rgba(15, 59, 58, 0) 56.3%
    ),
    #0f3b3a;
`;

export const AdvantagesContainer = styled.div`
  padding: 109px 0 59px;
  color: #ffffff;
  h1 {
    margin-bottom: 58px;
    font-weight: 400;
    font-size: 36px;
    line-height: 123%;
    span {
      color: #13dec9;
      font-weight: 700;
    }
  }
  .advantage-button {
    font-weight: 700;
    font-size: 24px;
    line-height: 123%;
    margin: auto;
    margin-top: 73px;
  }
`;

export const AdvantagesCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 58px 47px;
`;
