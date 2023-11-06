import React, { useContext, useState } from "react";
import Card from "../../Components/Card";
import { Store } from "../../Store";
import Category from "../../Components/Category/Category";

const Products = ({ filterData }) => {
  const { state } = useContext(Store);
  const { products } = state;
  const [categoryArray, setCategoryArray] = useState([]);
  const categories = [...new Set(products.map((product) => product.category))];
  return (
    <div className="home-container">
      <div className="category-menu">
        <h2>Categories</h2>
        {categories.map((category, i) => (
          <Category
            category={category}
            key={i}
            categoryArray={categoryArray}
            setCategoryArray={setCategoryArray}
            i={i}
          />
        ))}
      </div>
      <div className="ProductScreen-cardContainer">
        {filterData
          .filter((product) => {
            if (categoryArray.length === 0) return true;
            else {
              for (var ele of categoryArray) {
                if (product.category.includes(ele))
                  return product.category.includes(ele);
              }
            }
            return false;
          })
          .map((product) => (
            <Card
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              desc={product.description}
              key={product.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
