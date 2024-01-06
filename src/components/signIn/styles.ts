import styled from "styled-components";

const SignInBody = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SignInContainer = styled.form`
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

const SubmitButton = styled.button.attrs({
  type: "submit",
})`
  width: 100%;
  padding: 1rem;
  border-radius: 9px;
  outline: none;
  border: none;
  background-color: #10abff50;
  color: white;
  margin-top: 2rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #10abff;
  }
`;

const GoSignUpButton = styled.button.attrs({
  type: "button",
})`
  width: 100%;
  padding: 1rem;
  border-radius: 9px;
  outline: none;
  border: none;
  background-color: #27272750;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #272727;
    color: white;
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: red;
  text-align: center;
`;

const FindPassword = styled.p`
  text-align: center;
  cursor: pointer;
  &:hover {
    font-weight: 600;
    color: #0077df;
  }
`;

export {
  SignInBody,
  SignInContainer,
  ContainerTitle,
  InputWrapper,
  EmailInput,
  PasswordInput,
  SubmitButton,
  GoSignUpButton,
  ErrorMessage,
  FindPassword,
};
