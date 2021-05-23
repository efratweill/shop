import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

import "./AdminUpdateProduct.css";

function AdminUpdateProduct() {
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [updatedProductId, setUpdatedProductId] = useState("");
  const [updatedProductTitle, setUpdatedProductTitle] = useState("");
  //import products

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // const updateProduct = async (updatedProduct, updatedProductId) => {
  //   await fetch("http://localhost:8000/products/" + updatedProductId, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updatedProduct),
  //   });
  // };

  const searchProduct = (searchTerm) => {
    let results = [];
    if (searchTerm.length > 0) {
      results = products.filter((product) => {
        const regex = new RegExp(`${searchTerm}`, "gi");
        return product.title.match(regex);
      });
    }
    setSearchResults(results);
    setSearchTerm(searchTerm);
  };
  const choose = (oneResult) => {
    console.log("result", oneResult);
    setSearchTerm(oneResult.title);
    setSearchResults([]);
    setUpdatedProduct(oneResult);
    console.log(updatedProduct);
  };
  return (
    <div>
      <h2>Update product</h2>
      <p>Choose product to update:</p>
      <input
        onChange={(e) => {
          searchProduct(e.target.value);
        }}
        value={searchTerm}
        onBlur={() => {
          setTimeout(() => {
            setSearchResults([]);
          }, 100);
        }}
      ></input>
      {searchResults &&
        searchResults.map((oneResult, i) => (
          <div
            key={i}
            className="searchResults"
            onClick={() => {
              choose(oneResult);
            }}
          >
            {oneResult.title}
          </div>
        ))}
      {updatedProduct && (
        <Product
          //onSale={sale}
          image={updatedProduct.image}
          price={updatedProduct.price}
          title={updatedProduct.title}
          id={updatedProduct._id}
        />
      )}
      {/* <div className="adminForm">
          <label for="updatetitle">Product name:</label>
          <br></br>
          <input
            type="text"
            id="updatetitle"
            placeholder="Enter product name"
            value={updatedProduct.title}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, title: e.target.value })
            }
          ></input>
          <br></br>
          <label for="updateprice">Price:</label>
          <br></br>
          <input
            type="text"
            id="updateprice"
            placeholder="Enter price"
            value={updatedProduct.price}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, price: e.target.value })
            }
          ></input> */}
      {/* <br></br>
          <label for="updatedescription">Product description:</label>
          <br></br>
          <input
            type="text"
            id="updatedescription"
            placeholder="Enter product description"
            value={updatedProduct.description}
            onChange={(e) =>
              setUpdatedProduct({
                ...updatedProduct,
                description: e.target.value,
              })
            }
          ></input>
          <br></br>
          <label for="updatecategory">Product category:</label>
          <br></br>
          <input
            type="text"
            id="updatecategory"
            placeholder="Enter product category"
            value={updatedProduct.category}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, category: e.target.value })
            }
          ></input>
          <br></br>
          <label for="updateimage">Product image</label>
          <br></br>
          <input
            type="text"
            id="updateimage"
            placeholder="Enter a link to an image"
            value={updatedProduct.image}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, image: e.target.value })
            }
          ></input>
          <br></br>
          <button
          // onClick={() => {
          //   updateProduct();
          // }}
          >
            {" "}
            Update
          </button>
        </div>
      )} */}
    </div>
  );
}

export default AdminUpdateProduct;
