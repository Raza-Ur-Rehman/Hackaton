import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './Features/userReducer.js';


export const store = configureStore({
    reducer: {
        Users:UserReducer,
    },
  })


  export default store;