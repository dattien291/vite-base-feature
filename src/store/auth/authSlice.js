import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
      localStorage.setItem("User", JSON.stringify(state));
    },

    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },
});

export const { loadUser, logout } = authSlice.actions;

export default authSlice;
