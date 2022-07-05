import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/todos",
    config: {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }
});

export const getTodos = async () => {
    const response = await api.get("/");
    return response.data.slice(0,10);
}

export const getTodo = async (id) => {
    const response = await api.get(`/${id}`);
    return response.data;
}

export const addNewTodo = async (todo) => {
    const response = await api.post("",{
        "title": todo,
        "completed": false
      });
    return response.data;
}

export const removeTodo = async (id) => {
    const response = await api.delete(`/${id}`);
    return response.data;
}  

export const updateTodo = async (todo, changeCompleted) => {
    const {id, completed, title} = todo;
    console.log(title)
    const response = await api.put(`/${id}`, {
       title,
       completed: changeCompleted?!completed:completed
    });
    return response.data;
}

let todos=[];

export default todos;
