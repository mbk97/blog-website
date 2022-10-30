import React, { useState } from "react";
import { GeneralContentWrapper, Line, TitleContainer } from "../../GlobalStyle";
import CustomButton from "../common/button/Button";
import { PageTitle } from "../common/text/Text";
import {
  ContentContainer,
  PostInput,
  PostTextArea,
  TitleInputContainer,
  PostInputContainer,
  BtnWrapper,
} from "./style";

const CreatePost = () => {
  const [data, setData] = useState<any>({
    title: "",
    description: "",
  });

  const { title, description } = data;

  console.log(description);
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <GeneralContentWrapper>
      <TitleContainer>
        <Line></Line>
        <PageTitle>Create Post</PageTitle>
      </TitleContainer>
      <ContentContainer>
        <TitleInputContainer>
          <PostInput
            type="text"
            placeholder="New post title here..."
            onChange={handleInputChange}
            value={title}
            name="title"
          />
        </TitleInputContainer>
        <PostInputContainer>
          <PostTextArea
            placeholder="Your post content here..."
            onChange={handleInputChange}
            value={description}
            name="description"
          />
        </PostInputContainer>
      </ContentContainer>
      <BtnWrapper>
        <CustomButton>Create</CustomButton>
      </BtnWrapper>
    </GeneralContentWrapper>
  );
};

export default CreatePost;
