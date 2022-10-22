import styled from "styled-components";

export interface inputProps {
  id?: number;
  type: string;
  placeholder: string;
  onChange?: (e: any) => void;
}

const Input = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid #6eeb83;
  padding: 10px;
  background-color: transparent;
  outline: 0;
  color: white;
  font-size: 18px;
  font-family: "Lexend Deca";
  text-transform: "capitalize";
  ::placeholder {
    font-family: "Lexend Deca";
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #a5a5a5;
  }

  :focus {
    background-color: transparent;
  }
`;

const CustomInput = ({ type, placeholder, onChange }: inputProps) => {
  return <Input type={type} placeholder={placeholder} onChange={onChange} />;
};

export default CustomInput;
