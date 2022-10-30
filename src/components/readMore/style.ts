import styled from "styled-components";

export const ReadMoreUserDetails = styled.div`
  margin: 1rem 0 4rem;
`;

export const ReadMoreSmallText = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 25px;
  color: #a5a5a5;
`;

export const ReadMoreContentText = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: #ffffff;

  ::first-letter {
    font-size: 4rem;
    text-transform: uppercase;
  }

  @media (max-width: 470px) {
  }
`;
