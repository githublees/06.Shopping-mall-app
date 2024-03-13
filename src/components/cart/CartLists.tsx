import React from "react";
import CartList from "./CartList";
import "../../styles/CartLists.css";

const CartLists = () => {
  return (
    <div className="cartlists-container">
      <CartList />
      <CartList />
      <CartList />
      <CartList />
      <div className="cartlists-container-box">
        <span>합계: $130</span>
        <button>계산하기</button>
      </div>
    </div>
  );
};

export default CartLists;
