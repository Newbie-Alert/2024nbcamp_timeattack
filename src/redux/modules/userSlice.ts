import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

// slice의 타입 정의
export interface UserState {
  userInfo: {
    nickname: string;
    avatar: string;
    success: boolean | null;
    acessToken: string;
    userId: string;
  };
}

// slice 초기값 정의
const initialState: UserState = {
  userInfo: {
    nickname: "",
    acessToken: "",
    avatar: "",
    userId: "",
    success: null,
  },
};

// reducer
export const userSlice = createSlice({
  name: "userInfo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<UserState>) => {
      console.log(action);
      state.userInfo.acessToken = action.payload.userInfo.acessToken;
      state.userInfo.nickname = action.payload.userInfo.nickname;
      state.userInfo.avatar = action.payload.userInfo.avatar;
      state.userInfo.success = action.payload.userInfo.success;
      state.userInfo.userId = action.payload.userInfo.userId;
    },
  },
});

// 생성한 reducer export
export const { setInfo } = userSlice.actions;

// 컴포넌트에서 countSlice를 가져오고 싶을 때 사용 할 Hook을 export
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
