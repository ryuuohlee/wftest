import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";

//top-level product display
const Products = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <>
      <div className="products">
        <ProductList products={products} />
      </div>
    </>
  );
};

export default Products;
