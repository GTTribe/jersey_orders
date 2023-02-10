import { configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import viewitemReducer from './viewitemSlice';
import itemProofReducer from './itemProofSlice';
import cartReducer from './cartSlice';

enableMapSet();

export const store = configureStore({
  reducer: {
    viewitem: viewitemReducer,
    itemproof: itemProofReducer,
    cart: cartReducer
  },
})