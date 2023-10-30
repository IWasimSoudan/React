import React from "react";
import {useSelector } from "react-redux"

const ProductListiong = () => {

    const products  = useSelector ((state)=>state);
    console.log(products); 


  return (
    <div className="ui grid container">
      <h1>ProductListiong </h1>{" "}
    </div>
  );
};

export default ProductListiong;
