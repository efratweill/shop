import React, { useState } from "react";
import Product from "../Product/Product";
//import SaleCountDown from "../SaleCountDown/SaleCountDown";

const ProductList = ({ productsdetales, newcategory }) => {
  const [sale, setSale] = useState(true);

  const saleOver = () => {
    setSale(!sale);
  };

  const categoryList = productsdetales.filter((product) =>
    newcategory === "all" ? true : product.category === newcategory
  );

  const listItems = categoryList.map((product) => (
    <Product
      //onSale={sale}
      key={product._id}
      image={product.image}
      price={product.price}
      title={product.title}
      id={product._id}
    />
  ));

  return (
    <div>
      <div>{/* <SaleCountDown endSale={saleOver} /> */}</div>
      <section className="products" id="products">
        {listItems}
      </section>
    </div>
  );
};

export default ProductList;
