import { createSlice } from '@reduxjs/toolkit';
import { register, login, getusers } from '../../api';

const initialState = {
  isLoading: false,
  error: '',
  userData: {},
  token:"",
  isAuth: false,
};


const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true;
      state.error = '';
      state.isAuth = false;
    },
    [register.fulfilled]: (state, action) => {
      state.isAuth = true
      state.loading = false;
      state.error = '';
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
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
      state.isAuth = false;
      state.token = '';
    },
  },
});


export default userSlice.reducer;
