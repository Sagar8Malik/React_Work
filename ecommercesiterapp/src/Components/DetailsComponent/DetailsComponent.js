import React from "react";

const DetailsComponent = ({ title, value }) => {
  return (
    <div className="info-element">
      <p className="title">{title}</p>
      <p>{value}</p>
    </div>
  );
};

export default DetailsComponent;
