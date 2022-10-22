import styled from "styled-components";

interface btnProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = styled.button`
  width: 180px;
  height: 60px;
  background: #6eeb83;
  text-transform: uppercase;
  outline: 0;
  border: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  font-family: "Lexend Deca";
  color: #000000;
  cursor: pointer;
`;

const CustomButton = ({ children, onClick }: btnProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default CustomButton;
