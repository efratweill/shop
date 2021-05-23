import React, { useEffect, useState } from "react";
import AdminAddProduct from "../../components/AdminAddProduct/AdminAddProduct";
import AdminUpdateProduct from "../../components/AdminUpdateProduct/AdminUpdateProduct";

import "./Admin.css";

function Admin() {
  return (
    <div>
      <h2>Store management page</h2>
      <br></br>
      <p>
        Welcome to store management page! Please enter the detals that you want
        to change or add and press the "Update" button.
      </p>
      <br></br>
      <AdminAddProduct />
      <br></br>
      <AdminUpdateProduct />
    </div>
  );
}

export default Admin;
