import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("OhdevToken") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("OhdevToken");
      localStorage.removeItem("userProfile");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
