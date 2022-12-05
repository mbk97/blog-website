import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}


body {
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
     sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   background: #272727;
   overflow-x: hidden;
   color: white;
}
`;

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthLink = styled(Link)`
  text-decoration: none;
  color: #6eeb83;
`;

export const DashboardLink = styled(Link)`
  text-decoration: none;
`;

export const AuthLeftContent = styled.div`
  flex: 30%;
  height: 100vh;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const AuthRightContent = styled.div`
  flex: 70%;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    flex: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`;

export const AuthImg = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const AuthInputWrapper = styled.div`
  width: 600px;
  @media (max-width: 470px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 470px) {
    flex-direction: column;
  }
`;

export const LinkText = styled.p`
  width: 227px;
  @media (max-width: 470px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const InputContainer = styled.div`
  margin: 20px 0;
`;

export const ColoredText = styled.span`
  color: #6eeb83;
`;

export const WelcomeHeader = styled.h3`
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 66px;
`;

export const WelcomeText = styled.p`
  font-family: "Lexend Deca";
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  color: #a5a5a5;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* flex-direction: column; */
  }
`;

export const Line = styled.div`
  width: 20px;
  height: 4px;
  background: #6eeb83;
  margin-left: 20px;
  /* margin: auto; */
  @media (max-width: 470px) {
    margin-left: 0px;
  }
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    margin-top: 1rem;
  }
`;

export const NavWrapper = styled.div`
  background: #272727;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 120px;
  height: 20vh;
`;

export const GeneralContentWrapper = styled.div`
  margin: 50px;
  width: 90%;

  @media (max-width: 600px) {
    margin: 20px;
    /* width: 100%; */
  }
`;
