import React, { useState } from "react";
import { GeneralContentWrapper } from "../../GlobalStyle";
import { CustomTitle } from "../../components/common/text/Text";
import {
  ReadMoreContentText,
  ReadMoreSmallText,
  ReadMoreUserDetails,
} from "./style";
import { useParams } from "react-router-dom";
import moment from "moment";
import ContentLoader from "../../components/contentLoader/ContentLoader";
import { Dialog } from "@mui/material";
import Edit from "../../components/editPost/Edit";
import Spinner from "../../components/spinner/Spinner";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { ActionIcons } from "../latest/style";
import { saveToLocalStorage } from "../../utils/storage";
import {
  useDeleteUserBlog,
  useReadSingleBlogQuery,
} from "../../services/queries/blogs";
import { ICreate } from "../../components/interfaces/blog";

const ReadMore = () => {
  const id = useParams().id as any;

  const [openEdit, setOpenEdit] = useState(false);
  const { data, isLoading } = useReadSingleBlogQuery(id);
  const { mutate } = useDeleteUserBlog();

  const blogData = data?.data.singleData;
  console.log(blogData, "HERE");

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleDelete = (id: string) => {
    mutate(id);
  };

  const year = moment(blogData?.created_at).format("D-MMMM-YYYY");

  const saveEditItem = (blogData: ICreate) => {
    saveToLocalStorage("blogResult", blogData);
  };

  return (
    <>
      <GeneralContentWrapper>
        {isLoading && <ContentLoader />}
        {!isLoading && blogData && (
          <>
            <CustomTitle>{blogData?.title}</CustomTitle>
            <ReadMoreUserDetails>
              <ReadMoreSmallText>written on {year}</ReadMoreSmallText>
            </ReadMoreUserDetails>
            <ReadMoreContentText>{blogData?.description}</ReadMoreContentText>
            <ActionIcons>
              {isLoading ? (
                <Spinner />
              ) : (
                <MdDeleteForever
                  color="#6eeb83"
                  size={30}
                  onClick={() => handleDelete(blogData?._id)}
                />
              )}
              <AiFillEdit
                color="#6eeb83"
                size={30}
                onClick={() => {
                  handleOpenEdit();
                  saveEditItem(blogData);
                }}
              />
            </ActionIcons>
          </>
        )}
        <Dialog open={openEdit} onClose={handleCloseEdit} fullScreen>
          <Edit handleCloseEdit={handleCloseEdit} />
        </Dialog>
      </GeneralContentWrapper>
    </>
  );
};

export default ReadMore;
