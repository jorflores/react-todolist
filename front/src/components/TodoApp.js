import React, { useState,useEffect } from "react";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import NavBar from "./NavBar";
import axios from "axios"




function TodoApp() {

  const token = localStorage.getItem("token")
const headers = {'auth_key': token}

console.log(`Headers ${headers.auth_key}`)

useEffect(()=>{

  axios.get("http://localhost:4000/getTasks",{headers})
  .then(res => {
    console.log(res.data)
    setTodos(res.data)
  })
  .catch(err => {
    console.log(err)
  })

},[])


  const [todos, setTodos] = useState([]);

  const agregarTodo = (newTodo) => {
    axios.post("http://localhost:4000/addTask",{title:newTodo},{headers}).then(res=>{
      
    setTodos((prev) => [...prev, res.data]);

    }).catch(err => {
      console.log(err)
    })
    
  };

  const deleteTodo = (todo) => {
    console.log(todo._id)

    axios.post("http://localhost:4000/deleteTask",{id:todo._id},{headers}).then(res=>{
      
    setTodos((prev) => prev.filter((prev) => prev._id !== todo._id));

    }).catch(err => {
      console.log(err)
    })


  };

  return (

    <div className="App">
    <NavBar />
    
    <div className="container">
      <h4 className="mx-4">My Todo</h4>
      <AddTodo agregar={agregarTodo} />
      <TodoList data={todos} eliminar={deleteTodo} />
    </div>
    </div>
  );
}

export default TodoApp;
