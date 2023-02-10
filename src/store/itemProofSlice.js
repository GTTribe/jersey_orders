import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
}

export const itemProofSlice = createSlice({
  name: 'itemproof',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.value = null;
      state.value = action.payload;
    },
    clearItem: (state) => {
      state.value = null;
    },
  },
})

export const { setItem, clearItem } = itemProofSlice.actions;

export default itemProofSlice.reducer;