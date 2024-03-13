import React from "react";
import "../styles/Category.css";
import Lists from "./Lists";

const Category = () => {
  return (
    <div className="category-container">
      <div className="category-container-box">
        <span>Product</span>
        <div className="category-container__btn">
          <button>모두</button>
          <button>전자기기</button>
          <button>의류</button>
          <button>남성의류</button>
          <button>여성의류</button>
        </div>
        <Lists />
      </div>
    </div>
  );
};

export default Category;
