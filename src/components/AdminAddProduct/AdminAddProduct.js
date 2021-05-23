import React, { useEffect, useState } from "react";

import "./AdminAddProduct.css";
function AdminAddProduct() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const fetchProducts = () =>
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  useEffect(() => {
    fetchProducts();
  }, []);
  const addProduct = async () => {
    const res = await fetch("http://localhost:8000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const product = await res.json();

    setProducts([product, ...products]);
    setNewProduct({
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
    });
  };

  return (
    <div>
      <h3>Adding new product</h3>
      <div className="adminForm">
        <label for="title">Product name:</label>
        <br></br>
        <input
          type="text"
          id="title"
          placeholder="Enter product name"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        ></input>
        <br></br>
        <label for="price">Price:</label>
        <br></br>
        <input
          type="text"
          id="price"
          placeholder="Enter price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        ></input>
        <br></br>
        <label for="description">Product description:</label>
        <br></br>
        <input
          type="text"
          id="description"
          placeholder="Enter product description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        ></input>
        <br></br>
        <label for="category">Product category:</label>
        <br></br>
        <input
          type="text"
          id="category"
          placeholder="Enter product category"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
        ></input>
        <br></br>
        <label for="image">Product image</label>
        <br></br>
        <input
          type="text"
          id="image"
          placeholder="Enter a link to an image"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        ></input>
        <br></br>
        <button onClick={addProduct}> Update</button>
      </div>
    </div>
  );
}

export default AdminAddProduct;
