import React, { useEffect, useState } from "react";
import { GeneralContentWrapper } from "../../GlobalStyle";
import { CustomTitle } from "../../components/common/text/Text";
import {
  ReadMoreContentText,
  ReadMoreSmallText,
  ReadMoreUserDetails,
} from "./style";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteBlogAction,
  getSinglePostAction,
} from "../../components/redux/actions/blog";
import { useAppDispatch } from "../../components/redux/store";
import { useTypedSelector } from "../../components/redux/reducers/rootReducer";
import moment from "moment";
import ContentLoader from "../../components/contentLoader/ContentLoader";
import { openSnackBar } from "../../components/redux/actions/snackbarActions";
import { Dialog } from "@mui/material";
import Edit from "../../components/editPost/Edit";
import Spinner from "../../components/spinner/Spinner";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { ActionIcons } from "../latest/style";
import { saveToLocalStorage } from "../../utils/storage";

const ReadMore = () => {
  const id = useParams()?.id;
  const dispatch = useAppDispatch();
  const blogData = useTypedSelector((state) => state.blogs.singleBlog);
  const loadingBlog = useTypedSelector(
    (state) => state.blogs.singleBlogLoading
  );
  const [openEdit, setOpenEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteBlogAction({ id, onSuccess, onError }));
    setLoading(true);
  };

  const onSuccess = (data: any) => {
    dispatch(openSnackBar("success", data));
    setLoading(false);
    navigate("/dashboard/latest");
  };
  const onError = (error: string) => {
    dispatch(openSnackBar("error", error));
    setLoading(false);
  };

  const year = moment(blogData.created_at).format("D-MMMM-YYYY");

  const saveEditItem = () => {
    saveToLocalStorage("blogData", blogData);
  };

  useEffect(() => {
    dispatch(getSinglePostAction({ id }));
  }, [dispatch, id]);

  return (
    <>
      <GeneralContentWrapper>
        {loadingBlog && <ContentLoader />}
        {!loadingBlog && blogData && (
          <>
            <CustomTitle>{blogData?.title}</CustomTitle>
            <ReadMoreUserDetails>
              <ReadMoreSmallText>written on {year}</ReadMoreSmallText>
            </ReadMoreUserDetails>
            <ReadMoreContentText>{blogData?.description}</ReadMoreContentText>
            <ActionIcons>
              {loading ? (
                <Spinner />
              ) : (
                <MdDeleteForever
                  color="#6eeb83"
                  size={30}
                  onClick={() => handleDelete(blogData._id)}
                />
              )}
              <AiFillEdit
                color="#6eeb83"
                size={30}
                onClick={() => {
                  handleOpenEdit();
                  saveEditItem();
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
