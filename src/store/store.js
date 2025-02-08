import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feature/conterSlice'
import todoReducer from '../feature/todoSlice';
import authReducer from '../auth/authslice'

const store = configureStore({
  reducer: {
    counter : counterReducer,
    todo: todoReducer,
    auth : authReducer
  }
});

export default store;
