import React, { useContext, useRef, useState } from "react";
import "./PaymentModal.css";
import { Store } from "../../Store";
import { useNavigate } from "react-router-dom";
import img from "../../images/loading.png";
const PaymentModal = ({ modal, handler }) => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { info, cartItems } = state;
  const defaultUpi = state.upi;
  const [loading, setLoading] = useState(false);
  const upi = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^[\w.-]+@[\w-][^0-9]+$/.test(upi.current.value)) {
      setLoading(true);
      ctxDispatch({ type: "ADD_UPI", payload: upi.current?.value });
      ctxDispatch({ type: "ADD_ORDERS", payload: { info, cartItems } });
      const timer = setTimeout(() => {
        setLoading(false);
        navigate(`/thankyou`);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      alert("Please enter valid UPI id.");
      return null;
    }
  };
  return (
    <div
      className="paymentModal-container"
      style={{ display: modal ? "flex" : "none" }}
    >
      <form className="form-conatiner" onSubmit={handleSubmit}>
        <label htmlFor="upi">UPI ID</label>
        <input
          type="email"
          placeholder="Enter UPI id..."
          ref={upi}
          defaultValue={defaultUpi}
          id="upi"
          required
        />
        <div className="button-group">
          <button type="submit">Submit</button>
          <button onClick={() => handler((prev) => !prev)}>Cancel</button>
        </div>
      </form>
      {loading && (
        <div className="loader-container">
          <img src={img} alt="loader" id="Loader" />
        </div>
      )}
    </div>
  );
};

export default PaymentModal;
