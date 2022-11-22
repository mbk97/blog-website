import React, { useEffect } from "react";
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
import { getBlogAction } from "../../components/redux/actions/blog";
import { useTypedSelector } from "../../components/redux/reducers/rootReducer";
import moment from "moment";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
// import { Tooltip } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";

const Latest = () => {
  const dispatch = useAppDispatch();
  const blogData = useTypedSelector((state) => state.blogs.blogs);

  const day = moment(blogData.created_at).format("D");
  const month = moment(blogData.created_at).format("MMMM");
  const year = moment(blogData.created_at).format("YYYY");

  const monthText = month.slice(0, 3);

  console.log(monthText);

  const handleDelete = () => {};

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
          <LatestContentWrapper key={item.id}>
            <DateAndMailContainer>
              <DateText>{day}</DateText>
              <DateText>{monthText}</DateText>
            </DateAndMailContainer>
            <TextContentContainer>
              <LatestTitle>{item.title}</LatestTitle>
              <LatestText>
                {item.description} <Span>...read more</Span>{" "}
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
                  <Tooltip
                    title="Delete"
                    placement="top"
                    style={{
                      background: "red",
                    }}
                  >
                    <MdDeleteForever color="#6eeb83" size={30} />
                  </Tooltip>
                  <Tooltip title="Edit" placement="top">
                    <AiFillEdit color="#6eeb83" size={30} />
                  </Tooltip>
                </ActionIcons>
              </ActionBtnFlex>
            </TextContentContainer>
          </LatestContentWrapper>
        );
      })}
    </GeneralContentWrapper>
  );
};

export default Latest;
