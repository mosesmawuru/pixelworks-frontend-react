import styled from "styled-components";

export const GetStartedWrapper = styled.div`
  display: flex;
  padding: 71px 25px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 40px 0;
  }
`;

export const GetStartedTextWrapper = styled.div`
  color: #1e272b;
  max-width: 459px;
  width: 50%;
  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 123%;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 123%;
    min-height: 178px;
  }
  & > :not(:first-child) {
    margin-top: 57px;
  }
  @media screen and (max-width: 900px) {
    p {
      min-height: auto;
    }
    & > :not(:first-child) {
      margin-top: 30px;
    }
    max-width: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 30px;
  }
`;

export const GetStartedImg = styled.div`
  max-width: 710px;
  img {
    width: 100%;
  }
`;
