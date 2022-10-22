import React, { useState } from "react";
import {
  AuthImg,
  AuthInputWrapper,
  AuthLeftContent,
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
import CustomInput from "../common/input/Input";
import CustomButton from "../common/button/Button";
import { signupInputData } from "../common/input/inputData";

const Signup = () => {
  const [data, setData] = useState<string | any>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(data);

  const handleChange = (e: any) => {
    setData(e.target.value);
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
            {signupInputData.map((item) => {
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
              <LinkText>
                already have an account? <br />{" "}
                <ColoredText> log-in</ColoredText>{" "}
              </LinkText>
            </ButtonWrapper>
          </AuthInputWrapper>
        </AuthRightContent>
      </AuthWrapper>
    </div>
  );
};

export default Signup;
