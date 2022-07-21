import React from "react";

function TodoList(props) {
  return (
    <div>
      <h4 className="mx-4">Todos</h4>
      <ul id="todos" className="list-group col mx-sm-3 mb-2 col-5">
        {props.data.map((todo) => (
          <li key={todo._id} id={todo._id}
            className="list-group-item d-flex justify-content-between align-items-center"
            
          >
            <span>{todo.title}</span>
            <i
              className="bi bi-trash3"
              onClick={() => props.eliminar(todo)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
