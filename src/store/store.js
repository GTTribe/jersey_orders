import { configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import viewitemReducer from './viewitemSlice';
import itemProofReducer from './itemProofSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import loggedInReducer from './loggedInSlice';
import viewpageReducer from './viewpageSlice';
import errorReducer from './errorSlice';

enableMapSet();

export const store = configureStore({
  reducer: {
    viewitem: viewitemReducer,
    itemproof: itemProofReducer,
    cart: cartReducer,
    user: userReducer,
    loggedIn: loggedInReducer,
    viewpage: viewpageReducer,
    error: errorReducer
  },
})