import { createSlice } from '@reduxjs/toolkit';
import { register, login, getUsers } from '../../api';

const initialState = {
  isLoading: false,
  error: '',
  userData: {},
  token:"",
  isAuth: false,
  employees:[]
};


const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerFail:(state,action)=>{
        state.error= action.payload;
    }
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [getUsers.fulfilled]: (state, action) => {
      state.employees = action.payload;
      state.loading = false;
      state.error = '';
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [register.pending]: (state) => {
      state.loading = true;
      state.error = '';
      state.isAuth = false;
    },
    [register.fulfilled]: (state, action) => {
      localStorage.setItem("AUTH_TOKEN",  action.payload.accessToken);
      localStorage.setItem("userEmail",  action.payload.user.email);

      state.isAuth = true
      state.loading = false;
      state.error = '';

      window.location = '/dashboard';
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
      state.isAuth = false;
    },
    [login.pending]: (state) => {
      state.loading = true;
      state.error = '';
      state.token = '';
      state.isAuth = false;
    },
    [login.fulfilled]: (state, action) => {
        localStorage.setItem("AUTH_TOKEN",  action.payload.accessToken);
        localStorage.setItem("userEmail",  action.payload.user.email);
  
      state.isAuth = true;
      state.loading = false;
      state.error = '';
      state.token = action.payload.accessToken;
      state.userData = action.payload.user;
      window.location = '/dashboard';
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
      state.isAuth = false;
      state.token = '';
    },
  },
});

export const {registerFail} = userSlice.actions;
export default userSlice.reducer;
