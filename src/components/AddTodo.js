import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function AddTodo(props) {
  // Individual para el que se agrega
  const [todo, setTodo] = useState("");

  const getTodo = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="row mb-4 ">
      <div className="col mx-sm-3 mb-2 col-5">
        <div className="d-flex">
          <input
            type="text"
            placeholder="agregar a la lista"
            id="new-todo"
            className="form-control"
            onChange={getTodo}
            value={todo}
          />
          <button
            id="add-btn"
            className="btn btn-primary"
            onClick={() => {
              props.agregar(todo);
              setTodo("");
            }}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
