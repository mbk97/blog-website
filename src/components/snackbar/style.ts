import styled, { keyframes } from "styled-components";

const fadein = keyframes`
    from {
      top: 0;
      opacity: 0;
    }
    to {
      top: 1rem;
      opacity: 1;
    }
`;

const fadeout = keyframes`
    from {
      bottom: 1rem;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
`;

export const SnackContainer = styled.div.attrs(
  (props: { bgColor: string }) => props
)`
  position: fixed;
  z-index: 10;
  right: 20px;
  top: 20px;
  border: transparent;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 364px;
  height: 80px;
  background-color: ${(props) => props.bgColor};
  transition: ease-in-out;
  animation: ${fadein} 0.5s, ${fadeout} 0.5s 3s;
  padding: 10px;

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const SnackText = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;
