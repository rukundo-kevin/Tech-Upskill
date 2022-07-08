/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { getTodos } from '../../api/todoApi';

const initialState = {
  todos: [],
  loading: false,
  error: '',
};

const todosSlicer = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [getTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
      state.loading = false;
      state.error = '';
    },
    [getTodos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default todosSlicer.reducer;
