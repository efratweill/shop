import React, { useEffect, useState } from "react";

import "./ProductEdit.css";
function ProductEdit({ match }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (match === undefined) {
      return;
    }
    fetch(`http://localhost:8000/products/${match.params.ProductId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data || {});
        console.log(data);
      });
  }, []);

  const editProduct = async () => {
    await fetch("http://localhost:8000/products/" + product._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    console.log("edit done");
    //setProduct(await res.json());
  };
  const addProduct = async () => {
    const res = await fetch("http://localhost:8000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const newProduct = await res.json();

    //setProducts([newProduct, ...products]);
    setProduct({
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
    });
  };

  return (
    <div>
      {match && <h3>Edit product:</h3>}
      {!match && <h3>Add product:</h3>}
      <div className="adminForm">
        <label for="title">Product name:</label>
        <br></br>
        <input
          type="text"
          id="title"
          placeholder="Enter product name"
          value={product?.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        ></input>
        <br></br>
        <label for="price">Price:</label>
        <br></br>
        <input
          type="text"
          id="price"
          placeholder="Enter price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        ></input>
        <br></br>
        <label for="description">Product description:</label>
        <br></br>
        <input
          type="text"
          id="description"
          placeholder="Enter product description"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        ></input>
        <br></br>
        <label for="category">Product category:</label>
        <br></br>
        <input
          type="text"
          id="category"
          placeholder="Enter product category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        ></input>
        <br></br>
        <label for="image">Product image</label>
        <br></br>
        <input
          type="text"
          id="image"
          placeholder="Enter a link to an image"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        ></input>
        <br></br>
        <button onClick={match ? editProduct : addProduct}> Update</button>
      </div>
    </div>
  );
}

export default ProductEdit;
