import React, { useContext, useMemo, useState } from "react";
import "./ProductScreens.css";
import { Store } from "../Store";
import Cart from "../Components/Cart/Cart.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails/ProductDetails";
import Products from "./Products/Products";
import Checkout from "./Checkout/Checkout";
import CheckoutDetails from "./CheckoutDetails/CheckoutDetails";
import ConfirmOrder from "./ConfirmOrder/ConfirmOrder";
import Thankyou from "./ThankYou/Thankyou";
import Header from "../Components/Header/Header";
const ProductScreens = () => {
  const { state } = useContext(Store);
  const { products } = state;
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");
  const filterData = useMemo(() => {
    const newProducts = products.filter((product) => {
      return searchInput.trim() === ""
        ? true
        : product.name
            .trim()
            .toUpperCase()
            .includes(searchInput.trim().toUpperCase());
    });
    return newProducts;
  }, [searchInput, products]);
  return (
    <BrowserRouter>
      <div className="ProductScreen-container">
        <Header
          setCategory={setCategory}
          setSearchInput={setSearchInput}
          searchInput={searchInput}
        />
        <Routes>
          <Route
            path="/"
            element={<Products filterData={filterData} category={category} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutDetails" element={<CheckoutDetails />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/placedOrder/:orderid" element={<ConfirmOrder />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default ProductScreens;
