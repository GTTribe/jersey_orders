import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
}

export const viewitemSlice = createSlice({
  name: 'viewitem',
  initialState,
  reducers: {
    view: (state, action) => {
      state.value = '';
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = '';
    },
  },
})

export const { view, reset } = viewitemSlice.actions;

export default viewitemSlice.reducer;