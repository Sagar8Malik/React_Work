import React, { useContext, useState } from "react";
import "./CheckoutDetails.css";
import InfoDisplay from "../../Components/InfoDisplay/InfoDisplay";
import { Store } from "../../Store";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../../Components/PaymentModal/PaymentModal";
const CheckoutDetails = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { info, cartItems } = state;
  const [paymentMethod, setpaymentMethod] = useState("cash");
  const [upimodal, setUpiModal] = useState(false);
  const handleSubmit = () => {
    if (paymentMethod === "cash") {
      ctxDispatch({ type: "ADD_ORDERS", payload: { info, cartItems } });
      navigate(`/thankyou`);
    } else {
      setUpiModal((upimodal) => !upimodal);
    }
  };
  return (
    <div className="checkoutDetails-container">
      <h2>Details</h2>
      <div className="container">
        <InfoDisplay label="Name" value={info?.name} />
        <InfoDisplay label="Phone No." value={info?.phoneNo} />
        <InfoDisplay label="Email" value={info?.email} />
        <InfoDisplay label="Address" value={info?.address} />
        <InfoDisplay label="Zipcode" value={info?.zipcode} />
        <InfoDisplay label="Alterate Address" value={info?.altAddress} />
      </div>
      <h2>Payment Method</h2>
      <form>
        <input
          type="radio"
          value="upi"
          name="payment"
          onChange={(e) => setpaymentMethod(e.target.value)}
          checked={paymentMethod === "upi"}
          id="upi"
        />{" "}
        <label htmlFor="upi">UPI</label>
        <input
          type="radio"
          value="cash"
          name="payment"
          onChange={(e) => setpaymentMethod(e.target.value)}
          checked={paymentMethod === "cash"}
          id="cash"
        />{" "}
        <label htmlFor="cash">Cash</label>
      </form>
      <button onClick={handleSubmit}>Proceed</button>
      <PaymentModal modal={upimodal} handler={setUpiModal} />
    </div>
  );
};

export default CheckoutDetails;
