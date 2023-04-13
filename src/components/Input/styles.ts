import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    outline: none;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 15px 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 123%;
    &::placeholder {
      color: rgba(30, 39, 43, 0.3);
    }
  }

  textarea {
    resize: none;
    height: 180px;
  }

  input {
    height: 40px;
  }
`;
