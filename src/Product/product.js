import React, { useState } from "react";
import "./product.css";
const Product = props => {
  const applyClass = props.indexPosition % 2 == 0 ? "even" : "odd";
  return (
    <div>
      <p
        className={applyClass}
        onClick={() => props.removeFunction(props.indexPosition)}
      >
        Hi {props.product}
      </p>
    </div>
  );
};

export default Product;
