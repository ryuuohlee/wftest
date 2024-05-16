import React from "react";

const ProductCard = (props) => {
  return (
    <>
      <div className="productTitle">
        <h1>{props.title}</h1>
      </div>
    </>
  );
};

export default ProductCard;
