import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    upload: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { upload } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export default userSlice.reducer;