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

const CustomTitle = ({ children }: textProps) => {
  return <Text>{children}</Text>;
};

export default CustomTitle;
