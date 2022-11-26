import React, { useState, useEffect } from "react";
import { EditWrapper, EditContentWrapper, EditContent } from "./style";
import AppBar from "@mui/material/AppBar";
import { TitleContainer } from "../../GlobalStyle";
import { PageTitle } from "../common/text/Text";
import { AiOutlineClose } from "react-icons/ai";
import CustomButton from "../common/button/Button";
import {
  BtnWrapper,
  ContentContainer,
  PostInput,
  PostInputContainer,
  PostTextArea,
  TitleInputContainer,
} from "../../pages/createPost/style";
import { getFromLocalStorage } from "../../utils/storage";
import { useAppDispatch } from "../redux/store";
import { editUserBlogAction } from "../redux/actions/blog";
import { openSnackBar } from "../redux/actions/snackbarActions";
import Spinner from "../spinner/Spinner";

interface IProps {
  handleCloseEdit: () => void;
}

const Edit = ({ handleCloseEdit }: IProps) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<any>({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

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

  const { title, description, _id } = getFromLocalStorage("blogData");

  useEffect(() => {
    setData({
      title: title,
      description: description,
    });
  }, [title, description]);

  const handleEdit = () => {
    dispatch(editUserBlogAction({ _id, data, onSuccess, onError }));
    setLoading(true);
  };

  const onSuccess = (data: string) => {
    setLoading(false);
    dispatch(openSnackBar("success", data));
    handleCloseEdit();
  };
  const onError = (error: string) => {
    setLoading(false);
    dispatch(openSnackBar("error", error));
  };

  return (
    <EditWrapper>
      <AppBar
        style={{
          height: "70px",
          background: "transparent",
          padding: "20px",
        }}
      >
        <TitleContainer>
          <div>
            <PageTitle>Edit blog</PageTitle>
          </div>
          <React.Fragment>
            <AiOutlineClose
              color="#6eeb83"
              size={30}
              onClick={handleCloseEdit}
              style={{
                cursor: "pointer",
                position: "relative",
              }}
            />
          </React.Fragment>
        </TitleContainer>
      </AppBar>
      <EditContentWrapper>
        <EditContent>
          <ContentContainer>
            <TitleInputContainer>
              <PostInput
                type="text"
                placeholder="New post title here..."
                onChange={handleInputChange}
                value={data.title}
                name="title"
              />
            </TitleInputContainer>
            <PostInputContainer>
              <PostTextArea
                placeholder="Your post content here..."
                onChange={handleInputChange}
                value={data.description}
                name="description"
              />
            </PostInputContainer>
          </ContentContainer>
          <BtnWrapper>
            <CustomButton onClick={handleEdit}>
              {loading ? <Spinner /> : "Edit"}
            </CustomButton>
          </BtnWrapper>
        </EditContent>
      </EditContentWrapper>
    </EditWrapper>
  );
};

export default Edit;
