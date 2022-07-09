import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, userEmail } from ".";

export const getTodos = createAsyncThunk(
  'todos/fetchAll',
  async (thunkAPI, { rejectWithValue }) => {
    try {
      const response = await api.get("/todo");
       response.data.forEach(el => delete el['employee']);
      return response.data;
    } catch (error) {
      if (error.response.data !== undefined) {
        return rejectWithValue({message: error.response.data});
      }
      return rejectWithValue({ message: error.message });
    }
  }
);


export const getTodo = async (id) => {
  const response = await api.get(`/todo/${id}`);
  return response.data;
};

export const addNewTodo = createAsyncThunk('todos/addNew', async (todo, {rejectWithValue}) =>{
 try {
  const response = await api.post("/todo", {
    title: todo,
    isCompleted: false,
    employee:userEmail
  });
  return response.data;
 } catch (error) {
  if (error.response.data !== undefined) {
    return rejectWithValue({message: error.response.data});
  }
  return rejectWithValue({ message: error.message });
 }
} )

export const removeTodo = createAsyncThunk('todos/addNew', async (id, {rejectWithValue}) =>{
  try {
    const response = await api.delete(`/todo/${id}`);
    return id;
  } catch (error) {
   if (error.response.data !== undefined) {
     return rejectWithValue({message: error.response.data});
   }
   return rejectWithValue({ message: error.message });
  }
 } )

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
