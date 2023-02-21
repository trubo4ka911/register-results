import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid gray;
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-left: 10px;
`;
