import React, { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import "../../styles/CartModal.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CartModal = ({ isActive, setIsActive }: any) => {
  const [render, setRender] = useState(isActive);

  useEffect(() => {
    if (isActive) {
      setRender(true);
    }
  }, [isActive]);

  const onAnimationEnd = () => {
    if (render) {
      setTimeout(() => {
        setRender(false);
      }, 2000);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className="cartmodal-container">
      <div className="wrapper-modal">
        <div
          className="modal"
          style={{
            animation: `${
              render ? "fadeIn 1s forwards" : "fadeOut 2s forwards"
            }`,
          }}
          onAnimationEnd={onAnimationEnd}
        >
          <button className="modal__delete">
            <FaRegTrashCan size="24" style={{ color: "gray" }} />
          </button>
          <div className="modal__img">img</div>
          <div className="modal-container">
            <div className="modal__category">man's closhing</div>
            <div className="modal__title">title</div>
            <div className="modal__exp">블라블라</div>
          </div>
          <div className="modal__cost">합계: $130</div>
          {/* <button className="modal__cartbtn"> */}
          <NavStyle to="cart" style={{ textDecoration: "none", color: "grey" }}>
            장바구니 가기
          </NavStyle>
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

const NavStyle = styled(NavLink)`
  grid-column: 1/3;

  display: grid;
  align-items: center;

  font-size: 20px;
  font-weight: bold;
  border: 0px;
  cursor: pointer;
`;
export default CartModal;
