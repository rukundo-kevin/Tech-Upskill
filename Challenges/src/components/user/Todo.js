import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { todoColumns } from "../../constants/tableColumns";
import { updateTodo, removeTodo, addNewTodo } from "../../api/todoApi";
import { addTodoFail } from "../../redux/features/todo.slice";
import { FormAction, Input } from "../Auth/";
import Table from "../reusable/Table";

import { getTodos } from "../../api/todoApi";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const {todos, error } = useSelector(state=> state.todo);

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getTodos());
  }, [todo]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };


  const handleClick = (e) => {
    e.preventDefault();
    if (!todo) {
      return dispatch(addTodoFail("Todo empty"));
    }
    !error && addNewTodo(todo);  
  };

  // const handleRemove = (e) => {
  //   const id = e.target.parentNode.parentNode.id;
  //   const newTodos = todos.filter((todo, index) => index !== +id);
  //   addTodos(newTodos);
  //   removeTodo(id);
  //   setTodo("");
  //   alert("Task Deleted Successfully");
  // };

  const handeleDblClick = (newTodo) => {
    updateTodo(newTodo, true);
    todo === "" ? setTodo("  ") : setTodo("");
  };

  const updateTitle = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const newTitle = prompt("Enter New Title");
    if (newTitle && newTitle.length < 3) {
      return dispatch(addTodoFail("Title too short"));
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
    todo === "" ? setTodo("  ") : setTodo("");
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
          <div className=" w-1/3 sm:w-full md:w-1/3 xl:w-1/4">
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
              customStyle=""
            />
          <FormAction handleSubmit={handleClick} text="Add New Task" />
          </div>
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
