import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../style/GlobalStyles";
import SignUp from "../components/signUp/SignUp";
import SignIn from "../components/signIn/SignIn";
import FindPW from "../components/findPassword/FindPW";

export default function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/find" element={<FindPW />} />
        <Route path="/*" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
