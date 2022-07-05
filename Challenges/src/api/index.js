import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const register = async ({ name, email, password }) => {
  const response = await api.post("/register", {
    name,
    email,
    password,
    role: "employee",
  });
  console.log(response.data);
  return response.data;
};

export const login = async ({ email, password }) => {
  const response = await api.post("/login", {
    email,
    password,
  });
  return response.data;
};

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};
