import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'home',
}

export const viewpageSlice = createSlice({
  name: 'viewpage',
  initialState,
  reducers: {
    viewPage: (state, action) => {
      state.value = '';
      state.value = action.payload;
    },
    home: (state) => {
      state.value = 'home';
    },
  },
})

export const { viewPage, home } = viewpageSlice.actions;

export default viewpageSlice.reducer;