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
import { createBlogAction } from "../../components/redux/actions/blog";
import { useAppDispatch } from "../../components/redux/store";
import Spinner from "../../components/spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { openSnackBar } from "../../components/redux/actions/snackbarActions";

const CreatePost = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState<any>({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

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

  const handleCreateBlog = () => {
    setLoading(true);
    dispatch(createBlogAction({ data, onSuccess, onError }));
  };

  const onSuccess = (data: any) => {
    dispatch(openSnackBar("success", data));
    setLoading(false);
    navigate("/dashboard/latest");
  };
  const onError = (error: any) => {
    dispatch(openSnackBar("error", error));
    setLoading(false);
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
        <CustomButton onClick={handleCreateBlog}>
          {loading ? <Spinner /> : "Create"}
        </CustomButton>
      </BtnWrapper>
    </GeneralContentWrapper>
  );
};

export default CreatePost;
