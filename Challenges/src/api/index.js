import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const register = createAsyncThunk(
  'user/register',
  async ({ name, email, password }, {rejectWithValue})=>{
    try {
      const response = await api.post("/register", {
        name,
        email,
        password,
        role: "employee",
      });
      return response.data;
    } catch (error) {
      if (error.response.data !== undefined) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: error });
    }
  }
)

export const login = createAsyncThunk('user/login',async({email, password}, {rejectWithValue})=>{
   try {
    const response = await api.post("/login", {
      email,
      password,
    });
    return response.data;
   } catch (error) {
    if (error.response.data !== undefined) {
      return rejectWithValue(error.response.data);
    }
    return rejectWithValue({ message: error.message });
   }
})

export const g = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const getUsers = createAsyncThunk('user/getAll', async(thunkApi, {rejectWithValue})=>{
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    if (error.response.data !== undefined) {
      return rejectWithValue(error.response.data);
    }
    return rejectWithValue({ message: error });   
  }
})
