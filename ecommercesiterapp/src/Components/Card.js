import React, { useContext } from "react";
import "./Card.css";
import { Store } from "../Store";
import IncDecButton from "./IncDecButton/IncDecButton";
import { useNavigate } from "react-router-dom";
// import img from "../images/recycle-bin.png";
const Card = ({ image, id, name, price, desc }) => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cartItems } = state;
  const onIncrement = (identity, value) => {
    ctxDispatch({
      type: "ADD_TO_CART_Cart",
      payload: { id: identity, changeBy: value },
    });
  };
  const onDecrement = (identity, value) => {
    ctxDispatch({
      type: "SUB_FROM_CART_ProductScreen",
      payload: { id: identity, changeBy: value },
    });
  };
  return (
    <div className="card">
      <img src={image} alt={name} onClick={() => navigate(`/details/${id}`)} />
      <div className="card-info">
        <h3 onClick={() => navigate(`/details/${id}`)}>{name}</h3>

        <p onClick={() => navigate(`/details/${id}`)} className="rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </p>
        <IncDecButton
          model={cartItems.includes(id)}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          changeBy={1}
          id={id}
          initialValue={cartItems.filter((item) => item === id).length}
        />

        <h4 onClick={() => navigate(`/details/${id}`)}>
          <span>Rs.</span> {price}
        </h4>
      </div>
    </div>
  );
};

export default Card;
