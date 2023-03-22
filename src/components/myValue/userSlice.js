import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    login: "",
    isLoggedIn: false,
  },

  reducers: {
    LogIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },

    logOut(state) {
      state.login = "";
      state.isLoggedIn = false;
    },
  },
});

export const { LogIn, logOut } = userSlice.actions;
