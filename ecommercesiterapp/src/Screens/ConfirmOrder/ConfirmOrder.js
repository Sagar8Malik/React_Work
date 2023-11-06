import React, { useContext } from "react";
import "./ConfirmOrder.css";
import DetailsComponent from "../../Components/DetailsComponent/DetailsComponent";
import { Store } from "../../Store";
import Item from "../../Components/ItemCard/Item";
import { useNavigate, useParams } from "react-router-dom";
const ConfirmOrder = () => {
  const navigate = useNavigate();
  const { orderid } = useParams();
  const { state } = useContext(Store);
  const { info, orders, products } = state;
  const order = orders.find((o) => Number(o.id) === Number(orderid));
  const itemArray = [];
  if (order) {
    for (var ele of order.items) {
      itemArray.push(
        products.find((product) => Number(ele) === Number(product.id))
      );
    }
  }
  return (
    <div className="confirmOrder-container">
      <div className="info-container">
        <h2>Order details</h2>
        <DetailsComponent title="Name" value={info?.name} />
        <DetailsComponent title="Address" value={info?.address} />
        <DetailsComponent title="Phone No." value={info?.phoneNo} />
        <DetailsComponent title="Email" value={info?.email} />
        <DetailsComponent title="Zipcode" value={info?.zipcode} />
        <DetailsComponent title="Alternate Address" value={info?.altAddress} />
        <button onClick={() => navigate("/")}>Continue Shopping</button>
      </div>
      {itemArray && (
        <>
          <h2>Items</h2>
          <div className="item-container">
            {itemArray.map((item, i) => (
              <Item key={i} img={item.image} name={item.name} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ConfirmOrder;
