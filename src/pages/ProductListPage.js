import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductListPage.css";

const products = ["car", "bike", "motorcycle"];

const ProductListPage = () => {
  const list = products.map((item) => (
    <li key={item}>
      <Link to={`/products/${item}`}>{item}</Link>
    </li>
  ));

  return (
    <div className="products">
      <h2>Lista produktów</h2>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default ProductListPage;
