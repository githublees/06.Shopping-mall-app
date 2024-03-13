import React, { useEffect } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import "../styles/DetailPage.css";
import styled from "styled-components";

const DetailPage = () => {
  const { isActive, setIsActive }: any = useOutletContext();

  useEffect(() => {}, [isActive]);
  return (
    <div className="detail-container">
      <div className="detail-container__img">img</div>
      <div className="detail-container-info">
        <span className="detail__category">man's closhing</span>
        <span className="detail__title">title</span>
        <span className="detail__cost">$ 125.3</span>
        <span className="detail__info">블라블라</span>
        <div className="detail-container-box">
          <button onClick={() => setIsActive(true)}>장바구니에 담기</button>
          <NavStyle to="/cart" style={{ textDecoration: "none" }}>
            <span>장바구니 가기</span>
          </NavStyle>
        </div>
      </div>
    </div>
  );
};

const NavStyle = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 70px;

  font-size: 18px;
  font-weight: bold;
  color: white;
  border: 0px;
  border-radius: 5px;

  background-color: grey;
  color: white;

  &:hover {
    background-color: lightgray;
    color: white;
  }
`;

export default DetailPage;
