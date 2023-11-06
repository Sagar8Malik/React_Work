import React, { useContext, useRef } from "react";
import "./Checkout.css";
import { Store } from "../../Store";
import { useNavigate } from "react-router-dom";
import Input from "../../Components/input/Input";
const Checkout = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { info } = state;
  const name = useRef(info?.name);
  const phoneNo = useRef(info?.phoneNo);
  const email = useRef(info?.email);
  const address = useRef(info?.address);
  const zipcode = useRef(info?.zipcode);
  const altAddress = useRef(info?.altAddress);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: name.current?.value,
      phoneNo: phoneNo.current?.value,
      email: email.current?.value,
      address: address.current?.value,
      zipcode: zipcode.current?.value,
      altAddress: altAddress.current?.value,
    };
    ctxDispatch({ type: "ADD_INFO", payload: data });
    navigate("/checkoutDetails");
  };
  return (
    <div className="checkout-container">
      <form className="form-container" onSubmit={submitHandler}>
        <h2>Checkout Form</h2>
        <Input
          label="Name"
          placeholder="Enter your Name...."
          refe={name}
          defVal={info?.name}
          typeOf="text"
        />
        <Input
          label="Phone No."
          placeholder="Enter your Phone No...."
          refe={phoneNo}
          defVal={info?.phoneNo}
          typeOf="number"
        />
        <Input
          label="Email"
          placeholder="Enter your Email..."
          refe={email}
          defVal={info?.email}
          typeOf="email"
        />
        <Input
          label="Address"
          placeholder="Enter your Address..."
          refe={address}
          defVal={info?.address}
          typeOf="text"
        />
        <Input
          label="Zipcode"
          placeholder="Enter your Zipcode..."
          refe={zipcode}
          defVal={info?.zipcode}
          typeOf="number"
        />
        <Input
          refe={altAddress}
          label="Alternate Address"
          defVal={info?.altAddress}
          placeholder="Enter your Alternate Address..."
          typeOf="text"
        />
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;
