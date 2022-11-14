import React, { useState } from "react";
import { GeneralContentWrapper, Line, TitleContainer } from "../../GlobalStyle";
import CustomButton from "../../components/common/button/Button";
import { PageTitle } from "../../components/common/text/Text";
import {
  ContentContainer,
  PostInput,
  PostTextArea,
  TitleInputContainer,
  PostInputContainer,
  BtnWrapper,
} from "./style";
import Logout from "../../components/logout/Logout";

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
        <div>
          <Line></Line>
          <PageTitle>Create Post</PageTitle>
        </div>
        <React.Fragment>
          <Logout />
        </React.Fragment>
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
