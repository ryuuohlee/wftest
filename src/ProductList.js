import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
  let { products } = props;
  let productCards = [];
  console.log(products);

  for (const product of products) {
    productCards.push(<ProductCard title={product.title} />);
  }

  return (
    <>
      <div className="productList">{productCards}</div>
    </>
  );
};

export default ProductList;
