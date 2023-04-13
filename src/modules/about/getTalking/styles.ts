import styled from "styled-components";

export const GetTalkingWrapper = styled.div`
  display: flex;
  padding: 71px 0;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
`;

export const GetTalkingImg = styled.div`
  max-width: 710px;
  img {
    width: 100%;
  }
`;

export const GetTalkingTextWrapper = styled.div`
  margin-left: 30px;
  max-width: 459px;
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
`;
