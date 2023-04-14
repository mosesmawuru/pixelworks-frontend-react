import styled from "styled-components";

export const DevelopmentWrapper = styled.div`
  display: flex;
  padding: 45.5px 25px;
  justify-content: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 45.5px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const DevelopmentTextWrapper = styled.div`
  color: #1e272b;
  max-width: 459px;
  padding-top: 45px;
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
    max-width: 100%;
    width: 90%;
    margin: auto;
    p {
      min-height: auto;
    }
    & > :not(:first-child) {
      margin-top: 30px;
    }
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const DevelopmentImg = styled.div`
  max-width: 708px;
  img {
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    margin: auto;
    width: 90%;
    margin-top: 30px;
  }
`;
