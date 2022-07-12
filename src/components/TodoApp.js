import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function TodoApp() {
  const data = [
    { title: "Estudiar", id: uuid() },
    { title: "Hacer Tarea", id: uuid() },
    { title: "Lavar el carro", id: uuid() },
  ];

  const [todos, setTodos] = useState(data);

  const agregarTodo = (newTodo) => {
    setTodos((prev) => [...prev, { id: uuid(), title: newTodo }]);
  };

  const deleteTodo = (todo) => {
    setTodos((prev) => prev.filter((prev) => prev.id !== todo.id));
  };

  return (
    <div className="container">
      <h4 className="mx-4">My Todo</h4>
      <AddTodo agregar={agregarTodo} />
      <TodoList data={todos} eliminar={deleteTodo} />
    </div>
  );
}

export default TodoApp;
