import React, { useContext, useState } from "react";
import "./Cart.css";
import { Store } from "../../Store";
import close from "../../images/close.png";
import trash from "../../images/recycle-bin.png";
import IncDecButton from "../IncDecButton/IncDecButton";
import Model from "../Model/Model";
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { products, cartItems, price } = state;
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const onIncrement = (id, value) => {
    ctxDispatch({ type: "ADD_TO_CART_Cart", payload: { id, changeBy: value } });
  };
  const onDecrement = (id, value) => {
    ctxDispatch({
      type: "SUB_FROM_CART_ProductScreen",
      payload: { id, changeBy: value },
    });
  };
  return (
    <article>
      {price === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products
              .filter((item) => cartItems.includes(item.id))
              .map((product, i) => (
                <tr key={i}>
                  <td>
                    <img src={product.image} alt={product.name} />
                  </td>
                  <td>{product.name}</td>
                  <td>Rs. {product.price}</td>
                  <td>
                    <IncDecButton
                      model={true}
                      initialValue={
                        cartItems.filter((item) => item === product.id).length
                      }
                      onIncrement={onIncrement}
                      onDecrement={onDecrement}
                      changeBy={1}
                      id={product.id}
                    />
                    <img
                      className="trash"
                      src={trash}
                      alt="trash"
                      onClick={() => {
                        setDeleteModal(true);
                        setDeleteId(product.id);
                      }}
                    />
                  </td>
                </tr>
              ))}

            <tr>
              <td></td>
              <td></td>
              <td>Total Price</td>
              <td>Rs. {price}</td>
            </tr>
          </tbody>
        </table>
      )}
      <div className="btn-container1">
        {price !== 0 && (
          <button
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Place Order
          </button>
        )}
      </div>
      {deleteModal && (
        <Model
          modal={deleteModal}
          handler={setDeleteModal}
          id={deleteId}
          setId={setDeleteId}
        />
      )}
    </article>
  );
};

export default Cart;
