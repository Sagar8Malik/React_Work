import React from "react";
import img1 from "../images/close.png";
const Model = ({ children, Model, Handler }) => {
  return (
    <div className="todoList-editForm-container">
      <div className="todoList-editForm">
        <img
          src={img1}
          alt="close"
          id="close"
          onClick={() => Handler(!Model)}
        />
        {children}
      </div>
    </div>
  );
};
export default Model;
