import styled from "styled-components";

export const ContactUsWrapper = styled.div`
  background: linear-gradient(
      78.28deg,
      rgba(19, 222, 201, 0.33) 0.02%,
      rgba(19, 222, 201, 0) 100.02%
    ),
    linear-gradient(0deg, rgba(40, 173, 162, 0.41), rgba(40, 173, 162, 0.41)),
    url("/images/contact.png");
  padding: 81px 0 87px;
  @media screen and (max-width: 520px) {
    padding: 40px 0;
  }
`;

export const ContactCardWrapper = styled.div`
  margin: auto;
  box-sizing: border-box;
  max-width: 1312px;
  width: 95%;
  background: #f8f8f8;
  border-radius: 6px;
  padding: 40px 113px 70px 50px;
  display: flex;
  @media screen and (max-width: 1280px) {
    padding-right: 50px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 520px) {
    padding: 40px 20px;
  }
`;

export const MeetingTextWrapper = styled.div`
  max-width: 458px;
  margin-right: 153px;
  width: 100%;
  & > :not(:first-child) {
    margin-top: 57px;
  }
  h1 {
    font-weight: 600;
    font-size: 30px;
    line-height: 123%;
    color: #1e272b;
  }
  @media screen and (max-width: 1280px) {
    margin-right: 50px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
    max-width: 100%;
    h1 {
      text-align: center;
    }
  }
  @media screen and (max-width: 520px) {
    & > :not(:first-child) {
      margin-top: 30px;
    }
  }
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 123%;
    color: #1e272b;
    text-align: center;
  }
  & > :not(:first-child) {
    margin-top: 20px;
  }
  p {
    font-weight: 400;
    line-height: 123%;
    font-size: 12px;
    text-align: center;
    a {
      text-decoration: none;
      font-weight: 600;
      color: #1e272b;
    }
  }
`;

export const MeetTextItem = styled.div`
  display: flex;
  div {
    margin-right: 27px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 123%;
  }
`;

export const ContactFormGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`;
