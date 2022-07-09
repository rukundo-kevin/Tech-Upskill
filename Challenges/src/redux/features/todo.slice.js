/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { getTodos, addNewTodo, removeTodo, updateTodo } from '../../api/todoApi';
const initialState = {
  todos: [],
  loading: false,
  error: '',
  addSuccess: false,
  message: ""
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
      state.message = "";
    },
    [addNewTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.addSuccess = !state.addSuccess;
      state.message = "New todo added successfully";
    },
    [addNewTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
      state.addSuccess = false;
      state.message = "";
    },
    [removeTodo.pending]: (state) => {
      state.loading = true;
      state.error = '';
      state.message = "";
    },
    [removeTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.addSuccess = !state.addSuccess;
      state.message = "Todo removed successfully"
    },
    [removeTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
      state.addSuccess = false;
      state.message = "";
    },
    [updateTodo.pending]: (state) => {
      state.loading = true;
      state.error = '';
      state.message = "";
    },
    [updateTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.addSuccess = !state.addSuccess;
      state.message = "Todo updated successfully"
    },
    [updateTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
      state.addSuccess = false;
      state.message = "";
    },
  },
});

export const {addTodoFail} = todosSlicer.actions;
export default todosSlicer.reducer;
