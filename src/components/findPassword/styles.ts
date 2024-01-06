import styled from "styled-components";

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

const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: red;
  text-align: left;
`;

const FoundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GoSignInpButton = styled.button.attrs({
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

export {
  SignUpBody,
  SignUpContainer,
  ContainerTitle,
  InputWrapper,
  EmailInput,
  SubmitButton,
  ErrorMessage,
  FoundContainer,
  GoSignInpButton,
};
