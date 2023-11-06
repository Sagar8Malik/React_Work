import React, { useState } from "react";
import "./Button.css";
const IncDecButton = ({
  model,
  onIncrement,
  onDecrement,
  changeBy,
  id,
  initialValue,
}) => {
  const [count, setCount] = useState(initialValue);
  const onIncHandler = () => {
    if (count >= 0) {
      setCount((value) => value + changeBy);
      onIncrement(id, changeBy);
    } else return null;
  };
  const onDecHandler = () => {
    if (count - changeBy >= 0) {
      setCount((value) => value - changeBy);
      onDecrement(id, changeBy);
    } else return null;
  };
  return (
    <>
      {model ? (
        <div className="btn-group">
          <div className="btn">
            <button onClick={() => onDecHandler()}>-</button>
            <p>{count}</p>
            <button onClick={() => onIncHandler()}>+</button>
          </div>
        </div>
      ) : (
        <button onClick={() => onIncHandler()}>Add To Cart</button>
      )}
    </>
  );
};

export default IncDecButton;
