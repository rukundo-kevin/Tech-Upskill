import React, { useEffect, useState } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import { IconContext } from "react-icons";
import Header from "./components/Header";
import './index.css';

import * as Todos from "./todoApi";
const {addNewTodo, getTodos, getTodo, removeTodo, updateTodo} = Todos;

const Todo =() =>{
    const [todos, addTodos] = useState([]);
    const [error, setError] = useState("")
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    useEffect(()=>{
       const getTodoList = async () => {
                const t = await getTodos();  
                addTodos(t); 
                }
                getTodoList();
    },[todo])

    const handleClick = (e) =>{
        e.preventDefault();
        if (!todo) {
          setError("Todo empty")     
          return;
        }
        !error && addNewTodo(todo);
        // !error && addTodos([...todos, {text: todo, completed: false}]);
        setTodo("");
        setError("")
    }

    const handleRemove = (e) => {
      const id = (e.target.parentNode.parentNode).id;
      const newTodos = todos.filter((todo, index) => index !== +id  );
      addTodos(newTodos);
      removeTodo(id);
      setTodo("");
      alert("Task Deleted Successfully")
    }

    const handeleDblClick = (newTodo) =>{
      updateTodo(newTodo, true);
     todo == ""?setTodo("  "):setTodo("")
    }

    const updateTitle = (e) =>{
      const id = (e.target.parentNode.parentNode).id;
      const newTitle = prompt("Enter New Title");
      if(newTitle && newTitle.length < 3){
        return setError("Title too short");
      }
      let newTodo = todos.filter((todo) => todo.id === +id)[0];
      newTodo= newTodo?{...newTodo, title:newTitle}:undefined;
      updateTodo(newTodo ? newTodo:     {
        "title": "Updated todo",
        "completed": true,
        "id": 10
      }, false);
      setError("");
      todo == ""?setTodo("  "):setTodo("")
    }

  const customStyle = {marginTop: "-4em", paddingTop:"1em"};
 return(
    <>   
    <Header customStyle={customStyle}/>
  <div id="how" className="howTodo">
    <div> 
      <h1>ToDo App</h1>
    </div>
    <div className="last todoLast" style={{marginLeft:"24em"}}>
      {error && (<div className="error" style={{display: "block"}}>
            Error:{error}
       </div>)}
      <form  action="#" className="" method="post" id="contact-form">
        <div className="form-item">             b
          <input  type="text" name="todoInput" value={todo} id="todoInput" onChange={handleChange} placeholder="Enter new to do" />
        </div>

        <button className="btn" style={{marginTop:"2px"}} onClick={handleClick}><span>Add New To Do </span>  </button>
      </form>
         <div className="todoContainer">
          {todos.length !== 0?
                (todos.map(todo => {
                    return(
                        <div key={todo.id} className={`todo ${todo.completed?'completed':''}`} onDoubleClick={(e=>handeleDblClick(todo))}>
                            <p>{todo.title}</p>
                            <div  id={todo.id}  className="icons">
                            <IconContext.Provider value={{ color: "#ee354b", className: "liIcon" }}>
                                <FaTimes onClick={handleRemove}/>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: "green", className: "liIcon" }}>
                                <FaEdit onClick={updateTitle}/>
                            </IconContext.Provider>
                            </div>
                        </div>
                    )
                }))
           :<div className="error" style={{display: "block"}}>
          Horray: No Todos Currently
      </div> }
         </div>
      </div>
    </div>
      </>
 )
}

export default Todo;
