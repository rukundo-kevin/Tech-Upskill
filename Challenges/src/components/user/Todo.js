import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { todoColumns } from "../../constants/tableColumns";
import { updateTodo, removeTodo, addNewTodo } from "../../api/todoApi";
import { addTodoFail } from "../../redux/features/todo.slice";
import { Alert, FormAction, Input } from "../Auth/";
import Table from "../reusable/Table";

import { getTodos } from "../../api/todoApi";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const {todos, error, addSuccess } = useSelector(state=> state.todo);

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getTodos());
  }, [addSuccess, dispatch]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (todo.length < 3) {
      return dispatch(addTodoFail("Todo empty"));
    }
    return dispatch(addNewTodo(todo));  
  };

  const handleRemove = (e) => {
    const {id} = e.target;
   dispatch(removeTodo(id));
   alert("Task Deleted Successfully");
  };

  const handleUpdate = (e) => {
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
          <Alert message={error.payload} variant="error" heading="Error"/>
        )}
        <form onSubmit={handleClick}>
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
                    <Table columns={todoColumns} data={todos} handleDelete={handleRemove} handleUpdate={handleUpdate}/>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Alert variant="error" message="Horray: No Todos Currently "/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
