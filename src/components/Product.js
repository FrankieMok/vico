import React, { useState, useEffect } from "react";

import "../pages/product.css";
import ProductList from "../components/ProductList";

import firebase from "../config/fbConfig";

const Product = ({ productType }) => {
  //  console.log(productType);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ref = firebase.firestore().collection("products");
    const getProducts = () => {
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setProducts(items);
        setLoading(false);
      });
    };

    getProducts();
  }, []);

  if (loading) {
    return <h1> Loading </h1>;
  }
  return (
    <div className="product-container">
      <ProductList items={products} productType={productType} />
    </div>
  );
};

export default Product;
