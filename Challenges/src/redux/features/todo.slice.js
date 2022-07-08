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
  reducers: {
    addTodoFail: (state, payload) => {
      state.loading = false;
      state.error = payload;
    },
  },
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

export const {addTodoFail} = todosSlicer.actions;
export default todosSlicer.reducer;
