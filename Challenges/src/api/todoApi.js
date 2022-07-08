import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from ".";

export const getTodos = createAsyncThunk(
  'todos/fetchAll',
  async (thunkAPI, { rejectWithValue }) => {
    try {
      const response = await api.get("/todo");
      return response.data.slice(0, 10);
    } catch (error) {
      if (error.responseponse.data !== undefined) {
        return rejectWithValue(error.responseponse.data);
      }
      return rejectWithValue({ message: error.message });
    }
  }
);


export const getTodo = async (id) => {
  const response = await api.get(`/todo/${id}`);
  return response.data;
};

export const addNewTodo = async (todo) => {
  const response = await api.post("/todo", {
    title: todo,
    completed: false,
  });
  return response.data;
};

export const removeTodo = async (id) => {
  const response = await api.delete(`/todo/${id}`);
  return response.data;
};

export const updateTodo = async (todo, changeCompleted) => {
  const { id, completed, title } = todo;
  console.log(title);
  const response = await api.put(`/todo/${id}`, {
    title,
    completed: changeCompleted ? !completed : completed,
  });
  return response.data;
};

let todo = [];

export default todo;
