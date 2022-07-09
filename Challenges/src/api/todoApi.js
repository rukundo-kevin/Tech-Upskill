import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, userEmail } from ".";



export const getTodos = createAsyncThunk(
  'todos/fetchAll',
  async (thunkAPI, { rejectWithValue }) => {
    try {
      const response = await api.get("/todo");
      const response2 = await api.get(`/todo?email=${userEmail}`);
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

export const addNewTodo = createAsyncThunk('todos/add', async (todo, {rejectWithValue}) =>{
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

export const removeTodo = createAsyncThunk('todos/remove', async (id, {rejectWithValue}) =>{
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

 export const updateTodo = createAsyncThunk('todos/update', async ({id, title}, {rejectWithValue}) =>{
  try {
    const todo = await getTodo(id);
    const {isCompleted, employee, id:todoId} = todo;
    const response = await api.put(`/todo/${id}`, {
      isCompleted,employee,title:title,id:todoId, 
    });
    return response.data;
  } catch (error) {
   if (error.response.data !== undefined) {
     return rejectWithValue({message: error.response.data});
   }
   return rejectWithValue({ message: error.message });
  }
 } 
 )


let todo = [];

export default todo;
