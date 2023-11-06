import React, { useState } from "react";
import "./TodoList.css";
import img from "../images/correct.png";
import Todo from "../Components/Todo";
import TodoForm from "../Components/TodoForm";
import Model from "../Components/Model";
const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1001,
      title: "Buy groceries for next week",
      isCompleted: false,
      date: new Date(),
    },
    {
      id: 1002,
      title: "Clear Bill Payments",
      isCompleted: false,
      date: new Date(),
    },
    {
      id: 1003,
      title: "Visit to Doctor",
      isCompleted: true,
      date: new Date(),
    },
  ]);
  const [editModel, setEditModel] = useState(false);
  const [infoModel, setInfoModel] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [isCompleted, setisCompleted] = useState(false);
  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: 1000 + todos.length + 1,
        title: title,
        isCompleted: false,
        date: new Date(),
      },
    ]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const changeTodoStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? todo.isCompleted
            ? { ...todo, isCompleted: false }
            : { ...todo, isCompleted: true }
          : todo
      )
    );
  };
  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };
  return (
    <div className="todoList-container">
      <h1 className="title">
        <img src={img} alt="tick" />
        My Todo-s
      </h1>

      <TodoForm addTodo={addTodo} />

      <div className="line"></div>

      <div className="todolist-list">
        {todos.map((todo, i) => (
          <Todo
            changeTodoStatus={changeTodoStatus}
            deleteTodo={deleteTodo}
            id={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
            date={
              todo.date.getDate() +
              "/" +
              (todo.date.getMonth() + 1) +
              "/" +
              todo.date.getFullYear()
            }
            setEditModel={setEditModel}
            setEditId={setEditId}
            setEditTitle={setEditTitle}
            setInfoModel={setInfoModel}
            setisCompleted={setisCompleted}
            key={todo.id}
          />
        ))}
      </div>
      {infoModel && (
        <Model Model={infoModel} Handler={setInfoModel}>
          <>
            <p>
              id : <span>{editId}</span>
            </p>

            <p>
              Title : <span>{editTitle}</span>
            </p>

            <p>
              Is Completed : <span>{isCompleted ? "True" : "False"}</span>
            </p>
          </>
        </Model>
      )}
      {editModel && (
        <Model Model={editModel} Handler={setEditModel}>
          <>
            <p>id : {editId}</p>
            <input
              type="text"
              placeholder="New Title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <button
              onClick={() => {
                editTodo(editId, editTitle);
                setEditModel(false);
                setEditId(null);
                setEditTitle("");
              }}
            >
              Change
            </button>
          </>
        </Model>
      )}
    </div>
  );
};
export default TodoList;
