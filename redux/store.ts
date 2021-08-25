import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './login/login';

export default configureStore({
  reducer: {
    login: LoginReducer,
  },
});
