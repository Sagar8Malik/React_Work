import React, { useContext } from "react";
import img from "../../images/shopping-cart.png";
import img3 from "../../images/search.png";
import { Link } from "react-router-dom";
import { Store } from "../../Store";

const Header = ({ setCategory, setSearchInput, searchInput }) => {
  const { state } = useContext(Store);
  const { cartItems } = state;
  return (
    <header className="ProductScreen-header">
      <Link to="/" className="heading">
        <h1 onClick={() => setCategory("")}>Shopping App</h1>
      </Link>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <img src={img3} alt="search" />
      </div>
      <div className="cart-container">
        <Link to="/cart">
          <img src={img} alt="cart" />
        </Link>
        <span>{new Set(cartItems).size}</span>
      </div>
    </header>
  );
};

export default Header;
