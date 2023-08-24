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
import {
  checkPasswordValidator,
  passwordValidator,
} from "../../utils/validator";
import { AuthErrorText } from "../../components/common/text/Text";

const Signup = () => {
  const [inputData, setInputData] = useState<string | any>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate, isLoading } = useRegisterUserMutation();
  const { email, name, password, confirmPassword } = inputData;

  const data = {
    email: email,
    name: name,
    password: password,
  };

  const disable =
    !name ||
    !email ||
    !password ||
    !confirmPassword ||
    confirmPassword !== password ||
    isLoading ||
    !checkPasswordValidator(password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = () => {
    if (!disable) {
      mutate(data);
    }
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
            <AuthErrorText>{passwordValidator(password)}</AuthErrorText>
            <InputContainer>
              <CustomInput
                type="password"
                placeholder="Confirm your password"
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
              />
            </InputContainer>
            {confirmPassword && confirmPassword !== password ? (
              <AuthErrorText>passwords do not match</AuthErrorText>
            ) : null}
            <ButtonWrapper>
              <CustomButton onClick={handleSubmit} disabled={disable}>
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
