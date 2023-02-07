import React, { useState } from "react";
import {
  DashboardLink,
  GeneralContentWrapper,
  Line,
  TitleContainer,
} from "../../GlobalStyle";
import {
  LatestText,
  LatestTitle,
  PageTitle,
} from "../../components/common/text/Text";
import {
  DateAndMailContainer,
  DateText,
  LatestContentWrapper,
  MobileDateAndMailWrapper,
  Span,
  TextContentContainer,
  ActionBtnFlex,
  ActionIcons,
} from "./style";
import Logout from "../../components/logout/Logout";
import moment from "moment";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import Spinner from "../../components/spinner/Spinner";
import { Dialog } from "@mui/material";
import Edit from "../../components/editPost/Edit";
import { ICreate } from "../../components/interfaces/blog";
import { saveToLocalStorage } from "../../utils/storage";
import { Link } from "react-router-dom";
import BlogContentLoader from "../../components/contentLoader/BlogContentLoader";
import useUserData from "../../hooks/useUserData";
import { SmallCustomBtn } from "../../components/common/button/Button";
import {
  useDeleteUserBlog,
  useGetUserBlogQuery,
} from "../../services/queries/blogs";

const Latest = () => {
  const [deletedId, setDeletedId] = useState("");
  const [openEdit, setOpenEdit] = useState(false);
  const { result: blogResult, isLoading } = useGetUserBlogQuery();
  const { mutate } = useDeleteUserBlog();

  const day = moment(blogResult?.created_at).format("D");
  const month = moment(blogResult?.created_at).format("MMMM");
  const year = moment(blogResult?.created_at).format("YYYY");
  const monthText = month.slice(0, 3);

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleDelete = (id: string) => {
    setDeletedId(id);
    mutate(id);
  };

  const saveEditItem = (item: ICreate) => {
    saveToLocalStorage("blogResult", item);
  };

  const userData = useUserData();

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
      {isLoading && <BlogContentLoader />}

      {!isLoading && blogResult?.length === 0 ? (
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <LatestText>Hello {userData?.name}, you have no post yet.</LatestText>
          <div
            style={{
              marginTop: "20px",
              width: "150px",
            }}
          >
            <DashboardLink to="/dashboard/create">
              <SmallCustomBtn>Create post</SmallCustomBtn>
            </DashboardLink>
          </div>
        </div>
      ) : null}

      {!isLoading &&
        blogResult?.length !== 0 &&
        blogResult?.map((item: any) => {
          return (
            <LatestContentWrapper key={item._id}>
              <DateAndMailContainer>
                <DateText>{day}</DateText>
                <DateText>{monthText}</DateText>
              </DateAndMailContainer>
              <TextContentContainer>
                <LatestTitle>{item.title}</LatestTitle>
                <LatestText>
                  {item.description} {/* {item.description.length > 100 && ( */}
                  <Link
                    to={`/dashboard/read-more/${item._id}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Span>...read more</Span>{" "}
                  </Link>
                  {/* )} */}
                </LatestText>
                <MobileDateAndMailWrapper>
                  <DateText>
                    {day} {monthText} {year}
                  </DateText>
                </MobileDateAndMailWrapper>
                <ActionBtnFlex>
                  {/* <TagWrapper>
                    <TagPill>#Tag</TagPill>
                  </TagWrapper> */}
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
