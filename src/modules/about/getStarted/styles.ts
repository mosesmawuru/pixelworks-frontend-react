import styled from "styled-components";

export const GetStartedWrapper = styled.div`
  display: flex;
  padding: 71px 0;
  align-items: center;
  justify-content: center;
`;

export const GetStartedTextWrapper = styled.div`
  color: #1e272b;
  max-width: 459px;
  width: 100%;
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
`;

export const GetStartedImg = styled.div`
  max-width: 710px;
  img {
    width: 100%;
  }
`;
