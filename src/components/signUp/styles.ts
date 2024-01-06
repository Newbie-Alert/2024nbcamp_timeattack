import styled from "styled-components";
import { ButtonProps } from "../../types/types";

const SignUpBody = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SignUpContainer = styled.form`
  width: 100%;
  max-width: 500px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: 1px solid black;
  padding: 2rem 3rem;
  border-radius: 8px;
`;

const ContainerTitle = styled.h3`
  width: 100%;
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

const InputWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const EmailInput = styled.input.attrs({
  type: "email",
  required: true,
  id: "email",
  placeholder: "Email을 입력하세요",
})`
  width: 100%;
  padding: 0.6rem 0.4rem;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: #eeeeee;
`;

const PasswordInput = styled.input.attrs({
  type: "password",
  required: true,
  id: "password",
  placeholder: "비밀번호를 입력하세요",
  minLength: 8,
})`
  width: 100%;
  padding: 0.6rem 0.4rem;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: #eeeeee;
`;

const NickNameInput = styled.input.attrs({
  type: "text",
  required: true,
  placeholder: "닉네임을 입력하세요",
  minLength: 3,
  maxLength: 8,
})`
  width: 100%;
  padding: 0.6rem 0.4rem;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: #eeeeee;
`;

const SubmitButton = styled.button.attrs<ButtonProps>((props) => ({
  disabled: props.$isPassed ? false : true,
}))`
  width: 100%;
  padding: 1rem;
  border-radius: 9px;
  outline: none;
  border: none;
  cursor: ${(props) => (props.$isPassed ? "pointer" : "not-allowed")};
  background-color: ${(props) => (props.$isPassed ? "#10abff" : "#d4d4d4")};
  color: ${(props) => (props.$isPassed ? "white" : "black")};
  margin-top: 2rem;
  font-weight: 600;
`;

const AlertMessage = styled.p<ButtonProps>`
  font-size: 0.8rem;
  color: ${(props) => (props.$isAblePassword ? "green" : "black")};
`;

const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: red;
`;

const NickNameMessage = styled.p`
  font-size: 0.8rem;
`;

export {
  SignUpBody,
  SignUpContainer,
  ContainerTitle,
  InputWrapper,
  EmailInput,
  PasswordInput,
  NickNameInput,
  SubmitButton,
  AlertMessage,
  ErrorMessage,
  NickNameMessage,
};
