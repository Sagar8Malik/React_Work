import React, { useState } from "react";
const Category = ({ category, categoryArray, setCategoryArray, i }) => {
  const [check, setCheck] = useState(false);
  const addElement = (element) => {
    const tempArray = [...categoryArray];
    tempArray.push(element);
    setCategoryArray(tempArray);
  };
  const removeElement = (element) => {
    const tempArray = categoryArray.filter((c) => c !== element);
    setCategoryArray(tempArray);
  };
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => {
          setCheck((check) => !check);
          check ? removeElement(category) : addElement(category);
        }}
        checked={check}
        className="check"
      />
      <label
        onClick={(e) => {
          setCheck((check) => !check);
          check ? removeElement(category) : addElement(category);
        }}
      >
        {category}
      </label>
    </div>
  );
};

export default Category;
