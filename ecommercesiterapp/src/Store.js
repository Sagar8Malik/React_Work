import { createContext, useReducer } from "react";

import img1 from "./images/i1.png";
import img2 from "./images/i2.jpg";
import img3 from "./images/i3.jpg";
import img4 from "./images/i4.jpg";
import img5 from "./images/i5.jpg";
import img6 from "./images/i6.jpg";
import img7 from "./images/i7.jpg";

export const Store = createContext();
const initialState = {
  products: [
    {
      id: 1,
      name: "Water Bottle",
      image: img1,
      price: 200,
      category: "Home Accessories",
      description: "Steel Bottle",
    },
    {
      id: 2,
      name: "Chair",
      image: img2,
      price: 4000,
      category: "Home Accessories",
      description: "Plastic Chair",
    },
    {
      id: 3,
      name: "Pendrive",
      image: img3,
      price: 350,
      category: "Electronics",
      description: "16GB Storage",
    },
    {
      id: 4,
      name: "BiCycle",
      image: img4,
      price: 7000,
      category: "Sports",
      description: "7Gear Cycle",
    },
    {
      id: 5,
      name: "BlouetoothHeadset",
      image: img5,
      price: 2500,
      category: "Electronics",
      description: "7hrs Battery",
    },
    {
      id: 6,
      name: "CricketBat",
      image: img6,
      price: 7000,
      category: "Sports",
      description: "Kids Bat",
    },
    {
      id: 7,
      name: "Wrist Band",
      image: img7,
      price: 1000,
      category: "Accessories",
      description: "Plastic Band",
    },
  ],
  cartItems: [],
  price: 0,
  info: {},
  upi: "",
  orders: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART_Cart": {
      const newItemId = action.payload.id;
      const cartItems = [...state.cartItems];
      for (let index = 0; index < action.payload.changeBy; index++) {
        cartItems.push(newItemId);
      }
      const price =
        state.price +
        state.products.find((item) => item.id === newItemId).price;
      return { ...state, cartItems, price };
    }
    case "SUB_FROM_CART_ProductScreen": {
      const newItemId = action.payload.id;
      let cartItems = state.cartItems;
      for (let index = 0; index < action.payload.changeBy; index++) {
        const index2 = state.cartItems.indexOf(newItemId);
        cartItems = cartItems.filter((item, i) => i !== index2);
      }
      const price =
        state.price -
        state.products.find((item) => item.id === newItemId).price;
      return { ...state, cartItems, price };
    }
    case "REMOVE_CART": {
      const newItemId = action.payload;
      const cartItems = state.cartItems.filter((item) => {
        return item !== newItemId;
      });
      var price = 0;
      for (var ele of cartItems) {
        price += state.products.find((item) => item.id === ele).price;
      }
      return { ...state, cartItems, price };
    }
    case "ADD_INFO": {
      const info = action.payload;
      return { ...state, info };
    }
    case "ADD_UPI": {
      const upi = action.payload;
      return { ...state, upi };
    }
    case "ADD_ORDERS": {
      const orderInfo = action.payload;
      const obj = {
        id: state.orders.length + 1,
        info: { ...orderInfo.info },
        items: [...orderInfo.cartItems],
      };
      const tempArray = [...state.orders];
      tempArray.push(obj);
      return { ...state, orders: tempArray, cartItems: [], price: 0 };
    }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
