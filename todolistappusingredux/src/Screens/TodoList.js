import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import "./TodoList.css";
import { addTodo, deleteTodo, updateTodo } from "../Actions.js";
const TodoList = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [updateModal, setUpdateModal] = useState(false);
  const [index, setIndex] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div id="newtask">
          <input
            type="text"
            placeholder="Add Tasks"
            value={todoTitle}
            onChange={(e) => {
              setTodoTitle(e.target.value);
            }}
          />
          <button
            id="push"
            onClick={() => {
              dispatch(addTodo(todoTitle));
              setTodoTitle("");
            }}
          >
            Add
          </button>
        </div>
        <div id="tasks">
          {todos.map((todo, i) => (
            <div className="task" key={i}>
              <span id="taskname">* {todo.todoTitle}</span>
              <button
                className="delete"
                onClick={() => {
                  dispatch(deleteTodo(i));
                }}
              >
                delete
              </button>
              <button
                className="update"
                onClick={() => {
                  setIndex(i);
                  setUpdateModal(true);
                }}
              >
                update
              </button>
            </div>
          ))}
        </div>
      </div>
      {updateModal && (
        <div className="update-conatiner">
          <div id="newtask">
            <input
              type="text"
              placeholder="Update Tasks"
              value={todoTitle}
              onChange={(e) => {
                setTodoTitle(e.target.value);
              }}
            />
            <button
              id="push"
              onClick={() => {
                dispatch(updateTodo({ index, todoTitle }));
                setTodoTitle("");
                setUpdateModal(false);
              }}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  const obj = { todos: state.todos };
  return obj;
};

export default connect(mapStateToProps)(TodoList);
