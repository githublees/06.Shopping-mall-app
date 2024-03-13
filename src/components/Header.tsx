import { useEffect } from "react";
import "../styles/Header.css";
import { Link, NavLink } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { MdLogin } from "react-icons/md";
import styled from "styled-components";
import CartModal from "./cart/CartModal";

const Header = ({ isActive, setIsActive }: any) => {
  useEffect(() => {}, [isActive]);

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container__logo">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Shop
          </Link>
        </div>
        <div className="header-container-info">
          <NavStyle to="cart" style={{ textDecoration: "none" }}>
            <LuShoppingCart size="24" />
          </NavStyle>
          <div className="notifications-icon-container">
            <div className="notifications-count">1</div>
          </div>
          <NavStyle
            to="search"
            style={{ textDecoration: "none", paddingLeft: "30px" }}
          >
            <FiUser size="24" />
          </NavStyle>
          <NavStyle to="login" style={{ textDecoration: "none" }}>
            <MdLogin size="24" />
          </NavStyle>
          {isActive && (
            <CartModal isActive={isActive} setIsActive={setIsActive} />
          )}
        </div>
      </div>
    </div>
  );
};

const NavStyle = styled(NavLink)`
  padding-left: 20px;
  padding-top: 8px;

  border: none;
  background-color: transparent;
  color: black;
  cursor: pointer;

  &:hover {
    color: lightgray;
  }

  &.active {
    color: lightgray;
  }
`;

export default Header;
