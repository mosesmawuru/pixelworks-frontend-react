import styled from "styled-components";

export const RequestQuoteCardWrapper = styled.div`
  max-width: 472px;
  box-sizing: border-box;
  width: 100%;
  background: #eaeaea;
  box-shadow: 0px 0px 14px #13dec9;
  border-radius: 6px;
  padding: 30px;
  & > :not(:first-child) {
    margin-top: 20px;
  }
  h2 {
    font-weight: 700;
    font-size: 20px;
  }
  h3 {
    font-weight: 400;
    font-size: 16px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    a {
      text-decoration: none;
      font-weight: 600;
      color: #1e272b;
    }
  }
  h2,
  h3,
  p {
    line-height: 123%;
    color: #1e272b;
  }
  @media screen and (max-width: 425px) {
    padding: 30px 20px;
  }
`;

export const RequestQuoteFormGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
