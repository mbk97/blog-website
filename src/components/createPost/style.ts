import styled from "styled-components";

export const CreatePostWrapper = styled.div`
  margin: 50px;
  width: 90%;

  @media (max-width: 600px) {
    margin: 20px;
  }
`;

export const ContentContainer = styled.div`
  height: 70vh;
  width: 100%;
  border: 2px solid #6eeb83;
  margin-top: 40px;
  padding: 40px;
  @media (max-width: 600px) {
    padding: 20px;
    width: 100%;
    /* margin-bottom: 2rem; */
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
  font-size: 48px;
  @media (max-width: 600px) {
    font-size: 24px;
  }

  &::placeholder {
    font-size: 48px;
    color: white;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

export const PostInputContainer = styled.div`
  margin-top: 2rem;
`;

export const PostTextArea = styled.textarea`
  /* height: 300px; */
  height: 100%;
  border: 0;
  background-color: transparent;
  width: 100%;
  color: white;
  outline: 0;
  font-size: 24px;
  resize: none;
  @media (max-width: 600px) {
    font-size: 24px;
    height: 100%;
  }

  &::placeholder {
    font-size: 24px;
    color: white;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

export const BtnWrapper = styled.div`
  margin: 1rem 0;
`;
