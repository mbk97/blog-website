import React, { useState, useEffect } from "react";
import { EditWrapper, EditContentWrapper, EditContent } from "./style";
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
import Spinner from "../spinner/Spinner";
import { useEditUserBlog } from "../../services/queries/blogs";

interface IProps {
  handleCloseEdit: () => void;
}

const Edit = ({ handleCloseEdit }: IProps) => {
  const [data, setData] = useState<any>({
    title: "",
    description: "",
  });

  const { mutate, isLoading } = useEditUserBlog();
  const disable = isLoading;

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const { title, description, _id } = getFromLocalStorage("blogResult");

  useEffect(() => {
    setData({
      title: title,
      description: description,
    });
  }, [title, description, _id]);

  const handleEdit = () => {
    mutate({ _id, data });
  };

  return (
    <EditWrapper>
      <div
        style={{
          height: "70px",
          background: "transparent",
          padding: "20px",
          backgroundColor: "#272727",
          borderBottom: "1px solid #6eeb83",
          position: "sticky",
          top: 0,
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
      </div>
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
            <CustomButton onClick={handleEdit} disabled={disable}>
              {isLoading ? <Spinner /> : "Edit"}
            </CustomButton>
          </BtnWrapper>
        </EditContent>
      </EditContentWrapper>
    </EditWrapper>
  );
};

export default Edit;
