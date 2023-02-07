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
import signupBg from "../../assets/images/sign_up.png";
import CustomInput from "../../components/common/input/Input";
import CustomButton from "../../components/common/button/Button";
import Spinner from "../../components/spinner/Spinner";
import { useRegisterUserMutation } from "../../services/queries/auth";

const Signup = () => {
  const [data, setData] = useState<string | any>({
    name: "",
    email: "",
    password: "",
  });

  const { mutate, isLoading } = useRegisterUserMutation();
  const { email, name, password } = data;

  const disabled =
    !name || !email || !password || password.length < 6 || isLoading;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    mutate(data);
  };

  return (
    <div>
      <AuthWrapper>
        <AuthLeftContent>
          <AuthImg src={signupBg} />
        </AuthLeftContent>
        <AuthRightContent>
          <AuthInputWrapper>
            <WelcomeHeader>Welcome</WelcomeHeader>
            <WelcomeText>Let’s Sign you up quickly</WelcomeText>
            <InputContainer>
              <CustomInput
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                name="name"
                value={name}
              />
            </InputContainer>
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
              <CustomButton onClick={handleSubmit} disabled={disabled}>
                {isLoading ? <Spinner /> : "Submit"}
              </CustomButton>
              <LinkText>
                Already have an account?{" "}
                <ColoredText>
                  <AuthLink to="/">login</AuthLink>
                </ColoredText>{" "}
              </LinkText>
            </ButtonWrapper>
          </AuthInputWrapper>
        </AuthRightContent>
      </AuthWrapper>
    </div>
  );
};

export default Signup;
