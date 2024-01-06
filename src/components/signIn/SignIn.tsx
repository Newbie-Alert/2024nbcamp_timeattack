import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { signIn } from "../../api/user";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { logout, setInfo } from "../../redux/modules/userSlice";
import * as St from "./styles";

type UserInput = {
  id: string;
  password: string;
};

export default function SignIn({ loginedUser }: any) {
  // States
  const [userInput, setUserInput] = useState<UserInput>({
    id: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isLogined, setIsLogined] = useState<boolean>(false);

  // Hooks
  const dispatch = useAppDispatch();
  const navi = useNavigate();

  // input 입력 값이 변하면 userInput을 변경합니다.
  // 요소의 name 속성과 일치하는 key값을 변경합니다.
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    name === "id" && setUserInput((prev) => ({ ...prev, id: value }));
    name === "password" &&
      setUserInput((prev) => ({ ...prev, password: value }));
    setErrorMsg("");
  };

  // 로그인이 성공하면 userInput의 값을 비우고
  // setInfo reducer를 호출하여 user의 정보를 전역 상태에 업데이트 해줍니다.
  // 로그인이 실패하면 에러메세지를 사용자에게 보여줍니다.
  const handleSubmit = async (e: React.FormEvent) => {
    setUserInput((prev: UserInput) => ({ ...prev, id: "", password: "" }));
    e.preventDefault();
    try {
      const resp = await signIn(userInput);
      alert("로그인 성공");
      dispatch(setInfo(resp));
      navi("/", { replace: true });
    } catch (err: any) {
      setErrorMsg(err.response?.data.message);
    }
  };

  // 페이지 mount 시 로컬스토리지에 방금 회원가입한 유저의 id가 있다면
  // id를 가져와 email input에 기입합니다.
  useEffect(() => {
    if (localStorage.getItem("userId") !== null) {
      const signUpUserId: string | null = localStorage.getItem("userId");
      setUserInput((prev: UserInput) => ({
        ...prev,
        id: signUpUserId ?? prev.id,
      }));
    }
    if (loginedUser?.userInfo?.success) {
      setIsLogined(true);
    }
  }, [loginedUser]);

  if (isLogined)
    return (
      <St.SignInBody>
        <St.SignInContainer onSubmit={handleSubmit}>
          <h1>환영합니다아</h1>
          <St.SubmitButton onClick={() => dispatch(logout())}>
            로그아웃
          </St.SubmitButton>
        </St.SignInContainer>
      </St.SignInBody>
    );

  return (
    <St.SignInBody>
      <St.SignInContainer onSubmit={handleSubmit}>
        <St.ContainerTitle>로그인</St.ContainerTitle>
        <St.InputWrapper>
          <label htmlFor="id">Email</label>
          <St.EmailInput
            name="id"
            value={userInput.id}
            onChange={handleChange}
          />
        </St.InputWrapper>
        <St.InputWrapper>
          <label htmlFor="password">Password</label>
          <St.PasswordInput
            name="password"
            value={userInput.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </St.InputWrapper>
        <St.ErrorMessage>{errorMsg}</St.ErrorMessage>
        <St.SubmitButton>로그인</St.SubmitButton>
        <St.GoSignUpButton onClick={() => navi("/signup")}>
          회원가입
        </St.GoSignUpButton>
        <St.FindPassword onClick={() => navi("/find")}>
          비밀번호를 잊으셨나요?
        </St.FindPassword>
      </St.SignInContainer>
    </St.SignInBody>
  );
}
