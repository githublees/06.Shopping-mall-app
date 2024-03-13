import React from "react";
import "../styles/CartPage.css";
import CartLists from "../components/cart/CartLists";

const CartPage = () => {
  // return (
  //   <div className="cart-container">
  //     <GiShoppingCart size="400" />
  //     <span>Cart가 비어있습니다.</span>
  //     <Link
  //       to="/"
  //       style={{ paddingLeft: "40px", color: "grey", margin: "10px" }}
  //     >
  //       계속 쇼핑하기
  //     </Link>
  //   </div>
  // );
  return (
    <div>
      <CartLists />
    </div>
  );
};

export default CartPage;
