/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { getTodos, addNewTodo, removeTodo } from '../../api/todoApi';
const initialState = {
  todos: [],
  loading: false,
  error: '',
  addSuccess: false,
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
    [addNewTodo.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [addNewTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.addSuccess = !state.addSuccess;
    },
    [addNewTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
      state.addSuccess = false;
    },
    [removeTodo.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [removeTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.addSuccess = !state.addSuccess;
    },
    [removeTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
      state.addSuccess = false;
    },
  },
});

export const {addTodoFail} = todosSlicer.actions;
export default todosSlicer.reducer;
