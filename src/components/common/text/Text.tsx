import React, { ReactNode } from "react";
import styled from "styled-components";

interface textProps {
  children: ReactNode;
}

const Text = styled.h2`
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 55px;
  color: #6eeb83;

  @media (max-width: 470px) {
    font-size: 32px;
  }
`;

const Title = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
`;

const CustomTitle = ({ children }: textProps) => {
  return <Text>{children}</Text>;
};

const PageTitle = ({ children }: textProps) => {
  return <Title>{children}</Title>;
};

const LatestTitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  color: #6eeb83;
  font-family: "DM Serif Display";

  @media (max-width: 470px) {
    font-size: 24px;
    line-height: 33px;
  }
`;

const LatestText = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  @media (max-width: 470px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;

export { CustomTitle, PageTitle, LatestTitle, LatestText };
