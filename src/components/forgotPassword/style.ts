import styled from "styled-components";

export const ForgotWrapper = styled.div``;

export const ForgotLogo = styled.div`
  flex: 30%;
  height: 100vh;
  background-image: url("/side-Background.png");
  object-fit: cover;
  object-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ForgotLogoText = styled.h2`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 80px;
  color: #ffffff;
  transform: rotate(-90deg);
`;
