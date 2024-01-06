import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { signUp } from "../../api/user";
import { saveUser } from "../../api/db";
import type { UserInput } from "../../types/types";
import * as St from "./styles";

export default function SignUp() {
  // States
  const [userInput, setUserInput] = useState<UserInput>({
    id: "",
    password: "",
    nickname: "",
  });
  const [isPassed, setIsPassed] = useState<boolean>(false);
  const [passwordAlert, setPasswordAlert] = useState<string>("");
  const [nickNameAlert, setNickNameAlert] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isAblePassword, setIsAblePassword] = useState<boolean>(false);

  // Hooks
  const navi = useNavigate();

  // Functions
  // input 입력값이 변하면 userInput 상태를 입력값으로 변경합니다.
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // input 요소의 name이 userInput의 key값과 같은 값을 업데이트 합니다.
    const { value, name } = e.target;
    name === "id" && setUserInput((prev) => ({ ...prev, id: value }));
    name === "password" &&
      setUserInput((prev) => ({ ...prev, password: value }));
    name === "nickname" &&
      setUserInput((prev) => ({ ...prev, nickname: value }));
    setErrorMsg("");

    // id, password, nickname이 조건을 만족하면 회원가입 버튼을 활성화 합니다.
    const { id, password, nickname } = userInput;
    if (id !== "" && password !== "" && nickname.length > 2) setIsPassed(true);
    else setIsPassed(false);
  };

  // 유효성 검사입니다.
  // 패턴에 따라 영대소문자, 숫자, 정해진 특수기호, 8글자 이상, 공백 없음을 충족하는지 확인하고
  // 각각의 조건에 따라 오류 메세지를 띄웁니다.
  const passwordCheck = (pw: string) => {
    const regEx =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (regEx.test(pw) === false) {
      setPasswordAlert(
        "비밀번호는 8글자 이상/숫자/영대,소문자/ 특수문자를 포함해야 합니다"
      );
      setIsAblePassword(false);
      setIsPassed(false);
    }
    if (pw.search(/\s/) !== -1) {
      setPasswordAlert("비밀번호는 공백을 포함할 수 없습니다.");
    }
    if (regEx.test(pw) === true) {
      setPasswordAlert("안전합니다.");
      setIsAblePassword(true);
    } else {
      setIsAblePassword(false);
    }
  };

  // 닉네임의 공백과, 최소/최대 길이를 검사합니다
  const nickNameCheck = (nickname: string) => {
    const regEx = /^(?=.*?[a-z])(?=.*?[0-9])$/;
    console.log(regEx.test(nickname));

    if (regEx.test(nickname) === false) {
      setNickNameAlert(
        "닉네임은 최소 3글자 ~ 8글자이며, 공백을 포함할 수 없습니다"
      );
    }
    if (nickname.search(/\s/) !== -1) {
      setNickNameAlert("닉네임은 공백을 포함할 수 없습니다.");
    }
    if (regEx.test(nickname) === true && nickname.length > 3) {
      setNickNameAlert("사용 가능한 닉네임 입니다.");
      setIsPassed(true);
    }
  };

  // Button이 활성화 되어 submit 이벤트가 일어나면
  // localStorage에 가입 완료 된 유저의 아이디를 저장합니다
  // json-server에도 저장하는데 이것은 비밀번호 찾기 기능에 사용됩니다.
  // 오류가 발생하면 사용자에게 에러를 보여줍니다.
  // localStorage는 가입 성공 후 로그인 페이지로 가면
  // email input에 바로 기입이 될 수 있도록 하기 위해 저장해놓은 것입니다.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resp = await signUp(userInput);
      if (resp) {
        alert("회원가입이 완료되었습니다");
        localStorage.setItem("userId", userInput.id);
        saveUser(userInput);
        navi("/signin");
      }
    } catch (err: any) {
      setErrorMsg(err.response.data.message);
    }
  };

  // 비밀번호와 닉네임을 실시간으로 검사합니다.
  useEffect(() => {
    passwordCheck(userInput.password);
    nickNameCheck(userInput.nickname);
  }, [userInput.password, userInput.nickname]);

  return (
    <St.SignUpBody>
      <St.SignUpContainer onSubmit={handleSubmit}>
        <St.ContainerTitle>회원가입</St.ContainerTitle>
        <St.InputWrapper>
          <label htmlFor="id">Email</label>
          <St.EmailInput name="id" onChange={handleChange} />
          <St.ErrorMessage>{errorMsg}</St.ErrorMessage>
        </St.InputWrapper>
        <St.InputWrapper>
          <label htmlFor="password">Password</label>
          <St.PasswordInput
            name="password"
            onChange={(e) => {
              handleChange(e);
              passwordCheck(userInput.password);
            }}
          />
          <St.AlertMessage
            $isAblePassword={isAblePassword}
            $isPassed={isPassed}>
            {passwordAlert}
          </St.AlertMessage>
        </St.InputWrapper>
        <St.InputWrapper>
          <label htmlFor="nickname">Nickname</label>
          <St.NickNameInput
            name="nickname"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <St.NickNameMessage>{nickNameAlert}</St.NickNameMessage>
        </St.InputWrapper>
        <St.SubmitButton $isAblePassword={isAblePassword} $isPassed={isPassed}>
          회원가입
        </St.SubmitButton>
        <St.GoSignInButton onClick={() => navi("/")}>
          로그인 화면으로
        </St.GoSignInButton>
      </St.SignUpContainer>
    </St.SignUpBody>
  );
}
