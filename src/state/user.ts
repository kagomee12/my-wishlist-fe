import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/stores";

const initialState = {
  user: {} as User,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
