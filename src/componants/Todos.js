import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  console.log("props from store", props);
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
      />

      <button className="add-btn">ADD</button>
    </div>
  );
};

export default connect(null)(null)(Todos);
