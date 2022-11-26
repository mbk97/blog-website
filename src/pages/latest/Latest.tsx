import React, { useEffect, useState } from "react";
import { GeneralContentWrapper, Line, TitleContainer } from "../../GlobalStyle";
import {
  LatestText,
  LatestTitle,
  PageTitle,
} from "../../components/common/text/Text";
import {
  DateAndMailContainer,
  DateText,
  LatestContentWrapper,
  MailText,
  MailWrapper,
  MobileDateAndMailWrapper,
  Span,
  TagPill,
  TagWrapper,
  TextContentContainer,
  ActionBtnFlex,
  ActionIcons,
} from "./style";
import Logout from "../../components/logout/Logout";
import { useAppDispatch } from "../../components/redux/store";
import {
  deleteBlogAction,
  getBlogAction,
} from "../../components/redux/actions/blog";
import { useTypedSelector } from "../../components/redux/reducers/rootReducer";
import moment from "moment";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { openSnackBar } from "../../components/redux/actions/snackbarActions";
import Spinner from "../../components/spinner/Spinner";
import { Dialog } from "@mui/material";
import Edit from "../../components/editPost/Edit";
import { ICreate } from "../../components/interfaces/blog";
import { saveToLocalStorage } from "../../utils/storage";
import { Link } from "react-router-dom";
import ContentLoader from "../../components/contentLoader/ContentLoader";

const Latest = () => {
  const dispatch = useAppDispatch();
  const blogData = useTypedSelector((state) => state?.blogs?.blogs);
  // console.log(blogData);
  const day = moment(blogData.created_at).format("D");
  const month = moment(blogData.created_at).format("MMMM");
  const year = moment(blogData.created_at).format("YYYY");
  const monthText = month.slice(0, 3);
  const [deletedId, setDeletedId] = useState("");
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteBlogAction({ id, onSuccess, onError }));
    setDeletedId(id);
  };

  const onSuccess = (data: any) => {
    dispatch(openSnackBar("success", data));
  };
  const onError = (error: string) => {
    dispatch(openSnackBar("error", error));
  };

  const saveEditItem = (item: ICreate) => {
    saveToLocalStorage("blogData", item);
  };

  useEffect(() => {
    dispatch(getBlogAction());
  }, [dispatch]);

  return (
    <GeneralContentWrapper>
      <TitleContainer>
        <div>
          <Line></Line>
          <PageTitle>Latest</PageTitle>
        </div>
        <React.Fragment>
          <Logout />
        </React.Fragment>
      </TitleContainer>

      {blogData?.map((item: any) => {
        return (
          <LatestContentWrapper key={item._id}>
            <DateAndMailContainer>
              <DateText>{day}</DateText>
              <DateText>{monthText}</DateText>
            </DateAndMailContainer>
            <TextContentContainer>
              <LatestTitle>{item.title}</LatestTitle>
              <LatestText>
                {item.description}{" "}
                {item.description.length > 100 && (
                  <Link
                    to={`/dashboard/read-more/${item._id}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Span>...read more</Span>{" "}
                  </Link>
                )}
              </LatestText>
              <MobileDateAndMailWrapper>
                <DateText>
                  {day} {monthText} {year}
                </DateText>
              </MobileDateAndMailWrapper>
              <ActionBtnFlex>
                <TagWrapper>
                  <TagPill>#Tag</TagPill>
                </TagWrapper>
                <ActionIcons>
                  {deletedId === item._id ? (
                    <Spinner />
                  ) : (
                    <MdDeleteForever
                      color="#6eeb83"
                      size={30}
                      onClick={() => handleDelete(item._id)}
                    />
                  )}
                  <AiFillEdit
                    color="#6eeb83"
                    size={30}
                    onClick={() => {
                      handleOpenEdit();
                      saveEditItem(item);
                    }}
                  />
                </ActionIcons>
              </ActionBtnFlex>
            </TextContentContainer>
          </LatestContentWrapper>
        );
      })}
      <Dialog open={openEdit} onClose={handleCloseEdit} fullScreen>
        <Edit handleCloseEdit={handleCloseEdit} />
      </Dialog>
    </GeneralContentWrapper>
  );
};

export default Latest;
