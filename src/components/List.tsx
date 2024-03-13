import React from "react";
import "../styles/List.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const List = () => {
  return (
    <div className="list-item-container">
      <NavStyle to={`detail`}></NavStyle>
      <div className="list-item__title">Title</div>
      {/* <div className="list-item-box"> */}
      <button className="list-item__cart-btn">장바구니 담기</button>
      <div className="list-item__cost">
        <span>$112.3</span>
        {/* </div> */}
      </div>
    </div>
  );
};

const NavStyle = styled(NavLink)`
  margin: 20px 20px 0px 20px;
  grid-column: 1/-1;
  border: 1px solid lightgrey;
  cursor: pointer;
`;

export default List;
