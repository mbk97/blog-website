import styled from "styled-components";

interface btnProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomButton = ({ children, onClick, disabled }: btnProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      style={{
        opacity: disabled ? 0.4 : 1,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
