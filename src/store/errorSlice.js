import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ''
}

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.value = action.payload;
    },
    clearError: (state) => {
      state.value = ''
    }
  },
})

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;