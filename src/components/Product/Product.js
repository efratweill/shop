import React, { useContext } from "react";
import sale from "./sale.jpg";
import nosale from "./nosale.jpg";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

const Product = ({
  price,
  //onSale,
  image,
  title,
  id,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.background }} className="product-card">
      <Link to={`/products/${id}`}>
        {/* {price > 50 && onSale && (
          <img src={sale} width="50%" height="auto" alt="On sale" />
        )}
        {price < 50 && onSale && (
          <img src={nosale} width="50%" height="auto" alt="Not on sale" />
        )} */}
        <div className="product-image">
          <img src={image} />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>{price}</h6>
          <Link to={`/ProductEdit/${id}`}>
            <button>Edit</button>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default Product;
