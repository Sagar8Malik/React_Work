import React from "react";
import "./Thankyou.css";
import { useNavigate } from "react-router-dom";
const Thankyou = () => {
  const navigate = useNavigate();
  return (
    <div className="thankyou-container">
      <div>
        <h1>Order Confirmed</h1>
        <h3>Thank you for shopping</h3>
        <button onClick={() => navigate("/")}>Continue shopping</button>
      </div>
    </div>
  );
};

export default Thankyou;
