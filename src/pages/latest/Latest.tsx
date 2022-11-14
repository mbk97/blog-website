import React from "react";
import { GeneralContentWrapper, Line, TitleContainer } from "../../GlobalStyle";
import {
  LatestText,
  LatestTitle,
  PageTitle,
} from "../../components/common/text/Text";
import { latestData } from "./data";
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
} from "./style";
import Logout from "../../components/logout/Logout";

const Latest = () => {
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

      {latestData.map((item) => {
        return (
          <LatestContentWrapper key={item.id}>
            <DateAndMailContainer>
              <DateText>{item.day}</DateText>
              <DateText>{item.month}</DateText>
              <MailWrapper>
                <MailText>{item.email}</MailText>
              </MailWrapper>
            </DateAndMailContainer>
            <TextContentContainer>
              <LatestTitle>{item.title}</LatestTitle>
              <LatestText>
                {item.text} <Span>...read more</Span>{" "}
              </LatestText>
              <MobileDateAndMailWrapper>
                <DateText>
                  {item.day} {item.month} 2022
                </DateText>
                <MailText>{item.email}</MailText>
              </MobileDateAndMailWrapper>
              <TagWrapper>
                <TagPill>{item.tag}</TagPill>
              </TagWrapper>
            </TextContentContainer>
          </LatestContentWrapper>
        );
      })}
    </GeneralContentWrapper>
  );
};

export default Latest;
