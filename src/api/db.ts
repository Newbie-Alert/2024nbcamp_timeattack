import axios from "axios";

const userAPI = axios.create({
  baseURL: "http://localhost:8080",
});

interface UserInfo {
  id: string;
  password: string;
  nickname: string;
}

export const saveUser = async (userData: UserInfo) => {
  await userAPI.post("/user", userData);
  return;
};

export const findUser = async (info: Partial<UserInfo>) => {
  const resp = await userAPI.get(`/user?id=${info.id}`);
  return resp.data;
};
