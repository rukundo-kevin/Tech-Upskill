import React, { useEffect, useState } from "react";
import * as Todos from "../../api/todoApi";
import { todoColumns } from "../../constants/tableColumns";

import { FormAction, Input } from "../Auth/";
import Table from "../reusable/Table";

const { addNewTodo, getTodos, getTodo, removeTodo, updateTodo } = Todos;

const Todo = () => {
  const [todos, addTodos] = useState([]);
  const [error, setError] = useState("");
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  useEffect(() => {
    const getTodoList = async () => {
      const t = await getTodos();
      addTodos(t);
    };
    getTodoList();
  }, [todo]);

  const handleClick = (e) => {
    e.preventDefault();
    if (!todo) {
      setError("Todo empty");
      return;
    }
    !error && addNewTodo(todo);
    // !error && addTodos([...todos, {text: todo, completed: false}]);
    setTodo("");
    setError("");
  };

  const handleRemove = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const newTodos = todos.filter((todo, index) => index !== +id);
    addTodos(newTodos);
    removeTodo(id);
    setTodo("");
    alert("Task Deleted Successfully");
  };

  const handeleDblClick = (newTodo) => {
    updateTodo(newTodo, true);
    todo == "" ? setTodo("  ") : setTodo("");
  };

  const updateTitle = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const newTitle = prompt("Enter New Title");
    if (newTitle && newTitle.length < 3) {
      return setError("Title too short");
    }
    let newTodo = todos.filter((todo) => todo.id === +id)[0];
    newTodo = newTodo ? { ...newTodo, title: newTitle } : undefined;
    updateTodo(
      newTodo
        ? newTodo
        : {
            title: "Updated todo",
            completed: true,
            id: 10,
          },
      false
    );
    setError("");
    todo == "" ? setTodo("  ") : setTodo("");
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className=" w-full space-y-8 border p-8 rounded shadow-sm bg-white">
        {error && (
          <div className="error" style={{ display: "block" }}>
            Error:{error}
          </div>
        )}
        <form action="#" className="" method="post" id="contact-form">
          <div className="form-item">
            <Input
              key="todoInput"
              handleChange={handleChange}
              value={todo}
              labelText="Add Todo"
              labelFor="addTodo"
              id="todoInput"
              name="todoInput"
              type="text"
              isRequired={true}
              placeholder="Enter new to do"
              customStyle=" w-1/2"
            />
          </div>

          <FormAction handleSubmit={handleClick} text="Add New Task" />
        </form>
        <div className="todoContainer">
          {todos.length !== 0 ? (
            <div className="flex flex-col p-4">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <Table columns={todoColumns} data={todos} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="error" style={{ display: "block" }}>
              Horray: No Todos Currently
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
