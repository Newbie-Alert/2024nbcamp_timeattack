import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import { findUser } from "../../api/db";
import type { FindUserInput, UserInput } from "../../types/types";
import * as St from "./styles";

export default function SignUp() {
  // States
  const [userInput, setUserInput] = useState<FindUserInput>({
    id: "",
  });
  const [foundInfo, setFoundInfo] = useState<UserInput[] | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Hooks
  const navi = useNavigate();

  // input 값이 변화가 생기면 userInput state에 업데이트 합니다.
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    name === "id" && setUserInput((prev) => ({ ...prev, id: value }));
  };

  // submit 이벤트가 일어나면 json-server의 user DB에서
  // 제출한 email과 일치하는 정보가 있다면 가져와서 화면에 그려줍니다.
  // 데이터가 없다면 에러 메세지를 띄워줍니다.
  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const userInfo = await findUser(userInput);
    if (userInfo !== null) {
      setFoundInfo(userInfo);
      setErrorMsg("");
    }
    if (userInfo.length < 1) setErrorMsg("일치하는 정보가 없습니다");
  };

  return (
    <St.SignUpBody>
      <St.SignUpContainer onSubmit={handleSubmitEmail}>
        <St.ContainerTitle>비밀번호 찾기</St.ContainerTitle>
        <St.InputWrapper>
          <label htmlFor="id">Email</label>
          <St.EmailInput
            name="id"
            value={userInput.id}
            onChange={handleChange}
          />
          <St.ErrorMessage>{errorMsg}</St.ErrorMessage>
        </St.InputWrapper>
        {foundInfo !== null
          ? foundInfo.map((el: Partial<UserInput>) => {
              return (
                <St.FoundContainer key={el.id}>
                  <div>아이디: {el.id}</div>
                  <div>비밀번호: {el.password}</div>
                  <div>닉네임: {el.nickname}</div>
                </St.FoundContainer>
              );
            })
          : null}
        <St.SubmitButton>비밀번호 찾기</St.SubmitButton>
        <St.GoSignInpButton onClick={() => navi("/")}>
          로그인 하러 가기
        </St.GoSignInpButton>
      </St.SignUpContainer>
    </St.SignUpBody>
  );
}
