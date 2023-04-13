import styled from "styled-components";

export const CoreValuesWrapper = styled.div`
  background: linear-gradient(
      261.8deg,
      rgba(121, 255, 241, 0.4) 1.67%,
      rgba(15, 59, 58, 0) 56.3%
    ),
    #ffffff;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CordValuesContainer = styled.div`
  max-width: 1261px;
  width: 95%;
  margin: auto;
  h1 {
    font-weight: 400;
    font-size: 36px;
    line-height: 123%;
    color: #1e272b;
    margin-bottom: 23px;
    span {
      color: #13dec9;
      font-weight: 700;
    }
  }
`;

export const CoreValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 47px;
  .core-values {
    max-width: 280px;
  }
`;
