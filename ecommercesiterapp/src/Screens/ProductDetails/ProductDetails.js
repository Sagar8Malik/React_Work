import React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import FetchProduct from "../../Components/FetchProduct/FetchProduct";
const ProductDetails = () => {
  const { id } = useParams();
  const product = FetchProduct(id);
  return (
    <div className="productDetails-container">
      {product && (
        <>
          <div className="image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="info">
            <h2>
              <span>Title</span>
              <p>
                {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
              </p>
            </h2>
            <h2>
              <span>Category</span>

              <p>
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </p>
            </h2>
            <h2>
              <span>Price</span>
              <p>Rs.{product.price}</p>
            </h2>
            <h2>
              <span>Description</span>
              <p>
                {product.description.charAt(0).toUpperCase() +
                  product.description.slice(1)}
              </p>
            </h2>
            <p className="secondary-title">Review this product</p>
            <p className="tirtiary-title">
              Share your thoughts with other customers
            </p>
            <button className="btn">Write a product review</button>
            <div className="review-card">
              <div className="padding-5px flex gap">
                <p className="profile-container background-grey padding-10px round flex fit-content">
                  <i class="fa-solid fa-user font-big"></i>
                </p>
                <p className="secondary-title">Sagar</p>
              </div>
              <div className="padding-5px flex gap">
                <i className="fa-solid fa-star color-yellow" />
                <i className="fa-solid fa-star color-yellow" />
                <i className="fa-solid fa-star color-yellow" />
                <i className="fa-solid fa-star color-yellow" />
                <i className="fa-solid fa-star color-yellow" />
              </div>
              <p className="font-small">
                I am using it since last 5 days. It is very comfortable to sit
                on. Worth value for money.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
