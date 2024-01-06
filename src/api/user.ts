import axios from "axios";

const userAPI = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

interface SignUpInfo {
  id: string;
  password: string;
  nickname: string;
}

interface SignInInfo {
  id: string;
  password: string;
}

export const signUp = async (userInfo: SignUpInfo) => {
  const res = await userAPI.post("/register", userInfo);
  return res.data;
};

export const signIn = async (userInfo: SignInInfo) => {
  const res = await userAPI.post("/login", userInfo);
  return res.data;
};
