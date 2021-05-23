import React, { useEffect, useState } from "react";

import "./Productpage.css";

const Productpage = ({ match }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8000/products/${match.params.ProductId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [match.params.ProductId]);
  return (
    <div>
      <h2>Product: {product.title} </h2>
      <img src={product.image} />
    </div>
  );
};

export default Productpage;
