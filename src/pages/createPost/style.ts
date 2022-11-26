import styled from "styled-components";

export const ContentContainer = styled.div`
  height: 70vh;
  width: 100%;
  border: 2px solid #6eeb83;
  margin-top: 40px;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
    width: 100%;
  }
`;

export const TitleInputContainer = styled.div`
  width: 80%;
`;

export const PostInput = styled.input`
  height: 80px;
  border: 0;
  background-color: transparent;
  width: 100%;
  color: white;
  outline: 0;
  font-size: 24px;
  @media (max-width: 600px) {
    font-size: 16px;
  }

  &::placeholder {
    font-size: 24px;
    color: white;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

export const PostInputContainer = styled.div`
  margin-top: 1rem;
`;

export const PostTextArea = styled.textarea`
  height: 200px;
  border: 0;
  background-color: transparent;
  width: 100%;
  color: white;
  outline: 0;
  font-size: 24px;
  resize: none;
  @media (max-width: 600px) {
    font-size: 14px;
    height: 400px;
  }

  &::placeholder {
    font-size: 14px;
    color: white;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`;

export const BtnWrapper = styled.div`
  margin: 1rem 0;
`;
