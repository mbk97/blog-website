import React from "react";
import { ForgotLogo, ForgotLogoText, ForgotWrapper } from "./style";
import {
  AuthInputWrapper,
  AuthRightContent,
  AuthWrapper,
  ButtonWrapper,
  ColoredText,
  InputContainer,
  LinkText,
  WelcomeHeader,
  WelcomeText,
} from "../../GlobalStyle";
import CustomInput from "../common/input/Input";
import CustomButton from "../common/button/Button";

const ForgotPassword = () => {
  return (
    <AuthWrapper>
      <>
        <ForgotLogo>
          <ForgotLogoText>Forgot Password</ForgotLogoText>
        </ForgotLogo>
        <AuthRightContent>
          <ForgotWrapper>
            <AuthInputWrapper>
              <WelcomeHeader>Forgot password?</WelcomeHeader>
              <WelcomeText>Enter your mail to reset your password</WelcomeText>
              <InputContainer>
                <CustomInput type="email" placeholder="Enter your mail" />
              </InputContainer>
            </AuthInputWrapper>
            <ButtonWrapper>
              <CustomButton>Submit</CustomButton>
              <LinkText>
                <ColoredText> Log-in</ColoredText>{" "}
              </LinkText>
            </ButtonWrapper>
          </ForgotWrapper>
        </AuthRightContent>
      </>
    </AuthWrapper>
  );
};

export default ForgotPassword;
