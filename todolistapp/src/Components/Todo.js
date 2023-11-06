import React from "react";
import img2 from "../images/edit.png";
import img3 from "../images/trash-bin.png";
import img4 from "../images/letter-i.png";
import img from "../images/correct.png";
const Todo = ({
  id,
  title,
  isCompleted,
  date,
  deleteTodo,
  changeTodoStatus,
  setEditModel,
  setEditId,
  setInfoModel,
  setisCompleted,
  setEditTitle,
}) => {
  return (
    <div className="todolist-element">
      {isCompleted ? (
        <img src={img} alt="checked" onClick={() => changeTodoStatus(id)} />
      ) : (
        <i className="checked" onClick={() => changeTodoStatus(id)}></i>
      )}

      <p>{title}</p>

      <div>
        <div className="edit">
          <img
            src={img2}
            alt="edit"
            onClick={() => {
              setEditModel(true);
              setEditId(id);
            }}
          />
          <img
            src={img3}
            alt="delete"
            onClick={() => {
              deleteTodo(id);
            }}
          />
        </div>

        <div className="info">
          <img
            src={img4}
            alt=""
            onClick={() => {
              setInfoModel(true);
              setEditId(id);
              setEditTitle(title);
              setisCompleted(isCompleted);
            }}
          />

          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
export default Todo;
