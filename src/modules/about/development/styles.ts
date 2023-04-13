import styled from "styled-components";

export const DevelopmentWrapper = styled.div`
  display: flex;
  padding: 45.5px 0;
  justify-content: center;
`;

export const DevelopmentTextWrapper = styled.div`
  color: #1e272b;
  max-width: 459px;
  padding-top: 45px;
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

export const DevelopmentImg = styled.div`
  max-width: 708px;
  img {
    width: 100%;
  }
`;
