import styled from "styled-components";

export const Input = styled.input`
  width: 420px;
  height: 57px;
  border: none;
  font-size: 20px;
  padding-left: 10px;
`;

export const LabelIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #999;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 480px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: #06d47e;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  color: white;
  width: 480px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

export const ErrorMsg = styled.div`
  color: red;
`;
