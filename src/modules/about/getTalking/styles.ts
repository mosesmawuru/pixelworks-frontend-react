import styled from "styled-components";

export const GetTalkingWrapper = styled.div`
  display: flex;
  padding: 71px 25px;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const GetTalkingImg = styled.div`
  max-width: 710px;
  img {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    margin: auto;
  }
`;

export const GetTalkingTextWrapper = styled.div`
  margin-left: 30px;
  max-width: 459px;
  width: 50%;
  h1 {
    font-weight: 600;
    font-size: 36px;
    min-height: 77px;
    line-height: 123%;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 123%;
  }
  & > :not(:first-child) {
    margin-top: 57px;
  }
  @media screen and (max-width: 900px) {
    h1 {
      min-height: auto;
    }
    & > :not(:first-child) {
      margin-top: 30px;
    }
    margin-left: 0;
    max-width: 100%;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 30px;
  }
  /* @media screen and (max-width: 768px) {
    width: 95%;
    margin: auto;
  } */
`;
