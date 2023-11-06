import React from "react";
import "./InfoDisplay.css";
const InfoDisplay = ({ label, value }) => {
  return (
    <div className="info-container">
      <p>{label} :</p>
      <p>{value}</p>
    </div>
  );
};

export default InfoDisplay;
