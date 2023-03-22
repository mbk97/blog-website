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
import CustomInput from "../../components/common/input/Input";
import CustomButton from "../../components/common/button/Button";
import Spinner from "../../components/spinner/Spinner";
import { useLoginUserMutation } from "../../services/queries/auth";

const Login = () => {
  const [data, setData] = useState<string | any>({
    email: "",
    password: "",
  });
  const { mutate, isLoading } = useLoginUserMutation();

  const { email, password } = data;

  const disable = !email || !password || isLoading;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleClick = () => {
    mutate(data);
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

          <InputContainer>
            <CustomInput
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              name="email"
              value={email}
            />
          </InputContainer>
          <InputContainer>
            <CustomInput
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              name="password"
              value={password}
            />
          </InputContainer>

          <ButtonWrapper>
            <CustomButton onClick={handleClick} disabled={disable}>
              {isLoading ? <Spinner /> : "Submit"}
            </CustomButton>
            <div>
              <LinkText>
                Don’t have an account?{" "}
                <ColoredText>
                  <AuthLink to="/signup">sign-up</AuthLink>
                </ColoredText>{" "}
              </LinkText>
              {/* <LinkText>
                <ColoredText>
                  <AuthLink to="/forgot-password"> Forgot password?</AuthLink>
                </ColoredText>
              </LinkText> */}
            </div>
          </ButtonWrapper>
        </AuthInputWrapper>
      </AuthRightContent>
    </AuthWrapper>
  );
};

export default Login;
