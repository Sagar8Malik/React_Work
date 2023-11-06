import React from "react";

const Item = ({ img, name }) => {
  return (
    <div className="item">
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default Item;
