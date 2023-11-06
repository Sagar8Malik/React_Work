import React, { useContext } from "react";
import "./Model.css";
import close from "../../images/close.png";
import { Store } from "../../Store";
const Model = ({ modal, handler, id, setId }) => {
  const { dispatch: ctxDispatch } = useContext(Store);
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Are you Sure?</h2>
        <img src={close} alt="close" onClick={() => handler(!modal)} />
        <p>Do you want to delete this product?</p>
        <div className="btn-group">
          <button
            className="btn-confirm"
            onClick={() => {
              ctxDispatch({ type: "REMOVE_CART", payload: id });
              setId(null);
              handler(false);
            }}
          >
            Confirm
          </button>
          <button
            className="btn-cancle"
            onClick={() => {
              setId(null);
              handler(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
