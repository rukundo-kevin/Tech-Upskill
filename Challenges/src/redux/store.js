import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './features/todo.slice';
import  userReducer from './features/auth.slice'

export default configureStore({
  reducer: {
    todo: todoSlice,
    user: userReducer,
    devTools: process.env.NODE_ENV !== 'production',
  },
});
