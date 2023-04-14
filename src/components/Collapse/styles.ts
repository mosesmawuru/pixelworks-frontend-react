import styled from "styled-components";

export const CollapseWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  .ReactCollapse--collapse {
    transition: all 0.3s ease 0s;
  }
`;

export const CollapseHeader = styled.div`
  height: 157px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 60px;
  cursor: pointer;
  & > div {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 123%;
    img {
      margin-right: 50px;
    }
  }
  @media screen and (max-width: 768px) {
    height: 100px;
    padding: 0 20px;
    & > div {
      font-size: 18px;
      img {
        margin-right: 20px;
      }
    }
  }
`;

export const CollapseBodyText = styled.p`
  max-width: 1000px;
  margin: auto;
  width: 90%;
  padding-bottom: 20px;
`;
