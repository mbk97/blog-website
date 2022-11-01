import React, { useState } from "react";
import {
  AuthImg,
  AuthInputWrapper,
  AuthLeftContent,
  AuthLink,
  AuthRightContent,
  AuthWrapper,
  ButtonWrapper,
  ColoredText,
  InputContainer,
  LinkText,
  WelcomeHeader,
  WelcomeText,
} from "../../GlobalStyle";
import loginBg from "../../assets/images/login_bg.png";
import CustomInput from "../common/input/Input";
import CustomButton from "../common/button/Button";
import { loginInputData } from "../common/input/inputData";

const Login = () => {
  const [data, setData] = useState<string | any>({
    email: "",
    password: "",
  });

  console.log(data);

  const handleChange = (e: any) => {
    setData(e.target.value);
  };

  return (
    <AuthWrapper>
      <AuthLeftContent>
        <AuthImg src={loginBg} />
      </AuthLeftContent>
      <AuthRightContent>
        <AuthInputWrapper>
          <WelcomeHeader>Welcome</WelcomeHeader>
          <WelcomeText>Let’s log you in quickly</WelcomeText>
          {loginInputData.map((item) => {
            return (
              <InputContainer key={item.id}>
                <CustomInput
                  type={item.type}
                  placeholder={item.placeholder}
                  onChange={handleChange}
                />
              </InputContainer>
            );
          })}
          <ButtonWrapper>
            <CustomButton>Submit</CustomButton>
            <div>
              <LinkText>
                Don’t have an account?{" "}
                <ColoredText>
                  <AuthLink to="/signup">sign-up</AuthLink>
                </ColoredText>{" "}
              </LinkText>
              <LinkText>
                <ColoredText>
                  <AuthLink to="/forgot-password"> Forgot password?</AuthLink>
                </ColoredText>
              </LinkText>
            </div>
          </ButtonWrapper>
        </AuthInputWrapper>
      </AuthRightContent>
    </AuthWrapper>
  );
};

export default Login;
