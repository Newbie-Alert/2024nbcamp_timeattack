import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../style/GlobalStyles";
import SignUp from "../components/signUp/SignUp";
import SignIn from "../components/signIn/SignIn";
import FindPW from "../components/findPassword/FindPW";
import { useAppSelector } from "../hooks/reduxHooks";
import { selectUser } from "../redux/modules/userSlice";

export default function Router() {
  const loginedUser = useAppSelector(selectUser);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<SignIn loginedUser={loginedUser.userInfo} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/find" element={<FindPW />} />
        <Route
          path="/*"
          element={<SignIn loginedUser={loginedUser.userInfo} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
