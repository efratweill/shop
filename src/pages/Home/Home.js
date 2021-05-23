import React, { useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Nav from "../../components/Nav/Nav";

import "./Home.css";

const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    rv[x[key]] = true || [];
    return rv;
  }, {});

function Home() {
  const [productDetails, setProductdetails] = useState([]);
  const [category, setCategory] = useState("all");

  const fetchProductDetails = () => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((products) => {
        setProductdetails(products);
      });
  };

  if (!productDetails.length) {
    fetchProductDetails();
  }

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  let cat = Object.keys(groupBy(productDetails, "category"));
  cat = ["all", ...cat];
  return (
    <div>
      <h2>Home</h2>
      <Nav categories={cat} changeCategory={changeCategory} />
      <ProductList newcategory={category} productsdetales={productDetails} />
    </div>
  );
}

export default Home;
