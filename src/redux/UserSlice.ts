import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserType {
  state: boolean;
  token: string;
}

const initialState: UserType = { state: false, token: "" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserInfo: (state, action: PayloadAction<UserType>) => {
      state.state = action.payload.state;
      state.token = action.payload.token;
    },
    deleteUserInfo: (state) => {
      state = { state: false, token: "" };
    },
  },
  //   공부
  //   extraReducers: {},
});

export const { saveUserInfo, deleteUserInfo } = userSlice.actions;
export default userSlice.reducer;
