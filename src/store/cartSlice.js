import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.value.indexOf(action.payload);
      if (index > -1) {
        state.value.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.value = [];
    }
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;