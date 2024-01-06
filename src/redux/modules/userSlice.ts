import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

// slice의 타입 정의
export interface UserState {
  userInfo: {
    nickname: string;
    avatar: string;
    success: boolean | null;
    accessToken: string;
    userId: string;
  };
}

// slice 초기값 정의
const initialState: UserState = {
  userInfo: {
    nickname: "",
    accessToken: "",
    avatar: "",
    userId: "",
    success: null,
  },
};

// reducer
export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<UserState>) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    logout: (state) => {
      state.userInfo = {
        ...state.userInfo,
        nickname: "",
        accessToken: "",
        avatar: "",
        userId: "",
        success: null,
      };
    },
  },
});

// 생성한 reducer export
export const { setInfo, logout } = userSlice.actions;

// 컴포넌트에서 countSlice를 가져오고 싶을 때 사용 할 Hook을 export
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
