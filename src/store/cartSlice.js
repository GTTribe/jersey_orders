import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (action.payload[0] in state.value !== true) {
        state.value[action.payload[0]] = [];
        state.value[action.payload[0]].push(action.payload[1]);
      } else {
        let tmp = state.value[action.payload[0]].find(x => x.item_type === action.payload[1].item_type && 
          x.item_subtype === action.payload[1].item_subtype && 
          x.item_custom_name === action.payload[1].item_custom_name && 
          x.item_custom_number === action.payload[1].item_custom_number && 
          x.item_size === action.payload[1].item_size);
        const index = state.value[action.payload[0]].indexOf(tmp);
        if (index > -1) {
          console.log("Found index");
          const oldOrderCount = state.value[action.payload[0]][index].item_quantity;
          const newOrderCount = oldOrderCount + action.payload[1].item_quantity;
          state.value[action.payload[0]][index].item_quantity = newOrderCount;
        } else {
          state.value[action.payload[0]].push(action.payload[1]);
        }
      }
    },
    removeFromCart: (state, action) => {
      console.log("Removing!");
      console.log(action.payload[0]);
      console.log(action.payload[1]);
      if (action.payload[0] in state.value) {
        console.log("Found key");
        let tmp = state.value[action.payload[0]].find(x => x.item_type === action.payload[1].item_type && 
          x.item_subtype === action.payload[1].item_subtype && 
          x.item_custom_name === action.payload[1].item_custom_name && 
          x.item_custom_number === action.payload[1].item_custom_number && 
          x.item_size === action.payload[1].item_size);
        const index = state.value[action.payload[0]].indexOf(tmp);
        if (index > -1) {
          console.log("Found index");
          state.value[action.payload[0]].splice(index, 1);
        }
        if (state.value[action.payload[0]].length === 0) {
          delete state.value[action.payload[0]];
        }
      }
    },
    initCart: (state, action) => {
      state.value = action.payload;
    },
    clearCart: (state) => {
      state.value = {};
    }
  },
})

export const { addToCart, removeFromCart, clearCart, initCart } = cartSlice.actions;

export default cartSlice.reducer;