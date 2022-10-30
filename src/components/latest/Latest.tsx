import React from "react";
import { GeneralContentWrapper, Line, TitleContainer } from "../../GlobalStyle";
import { LatestText, LatestTitle, PageTitle } from "../common/text/Text";
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

const Latest = () => {
  return (
    <GeneralContentWrapper>
      <TitleContainer>
        <Line></Line>
        <PageTitle>Latest</PageTitle>
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
      </TitleContainer>
    </GeneralContentWrapper>
  );
};

export default Latest;
