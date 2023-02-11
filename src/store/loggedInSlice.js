import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false
}

export const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState,
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    }
  },
})

export const { login, logout } = loggedInSlice.actions;

export default loggedInSlice.reducer;