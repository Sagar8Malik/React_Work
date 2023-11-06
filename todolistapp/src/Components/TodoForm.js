import React, { useState } from "react";
import img1 from "../images/planning.png";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  return (
    <div className="todoList-addtodo">
      <input
        type="text"
        placeholder="Add new..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <img src={img1} alt="calender" />
      <button
        onClick={() => {
          addTodo(title);
          setTitle("");
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default TodoForm;
