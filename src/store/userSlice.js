import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    first_name: '',
    last_name: '',
    email: '',
    pickup_method: ''
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    resetUser: (state) => {
      state.value = {
        first_name: '',
        last_name: '',
        email: '',
        pickup_method: ''
      };
    }
  },
})

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;