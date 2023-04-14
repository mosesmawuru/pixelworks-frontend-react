import styled from "styled-components";

export const GradientCardWrapper = styled.div`
  background: linear-gradient(180deg, #28ada2 0%, #00433e 100%);
  box-sizing: border-box;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  border-radius: 5.24351px;
  height: 100%;
  color: #ffffff;
  padding: 20px;
  & > :not(:first-child) {
    margin-top: 14px;
  }
  h4 {
    /* width: 240px; */
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 123%;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 123%;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    margin: 0;
    padding-left: 25px;
    li {
      font-weight: 400;
      font-size: 16px;
      line-height: 123%;
    }
  }
`;
