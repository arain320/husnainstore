import React from "react";
import "./Products.scss";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [result, setResult] = useState([]);
  console.log(result);

  //get product from backend
  const getProduct = async () => {
    const res = await axios.get("http://localhost:5000/api/items", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.data.status === 401 || !res.data) {
      console.log("something went wrong");
    } else {
      setResult(res.data.getItems);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <Header />
      <div className="products">
        <div className="product-container">
          {result.length > 0
            ? result.map((product, index) => {
                return (
                  <>
                    <NavLink to="/Products">
                      <div className="product-card">
                        <div className="image">
                          <img src={product.path} alt="" />
                        </div>
                        <div className="name">
                          <span>{product.name}</span>
                        </div>
                        <div className="price">
                          <span>{product.price} </span>
                          <span>120000</span>
                        </div>
                      </div>
                    </NavLink>
                  </>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default Products;
