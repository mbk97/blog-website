import styled from "styled-components";

export const LatestContentWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin: 4rem 0;
  width: 80vw;
  @media (max-width: 600px) {
    margin: 2rem 0;
  }
`;

export const DateAndMailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const MailWrapper = styled.div``;

export const TextContentContainer = styled.div``;

export const MobileDateAndMailWrapper = styled.div`
  display: none;
  margin-top: 10px;

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    width: 100%;
  }
`;

export const DateText = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;

  @media (max-width: 470px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const MailText = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
`;

export const TagWrapper = styled.div``;

export const TagPill = styled.div`
  width: 116px;
  height: 30px;
  border: 1px solid #6eeb83;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6eeb83;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  margin-top: 1rem;
`;

export const Span = styled.span`
  font-weight: 300;
  color: #6eeb83;
  cursor: pointer;
`;

export const ActionBtnFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const ActionIcons = styled.div`
  margin-top: 15px;
  cursor: pointer;
  display: flex;
`;
