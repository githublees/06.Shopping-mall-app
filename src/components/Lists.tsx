import React from "react";
import List from "./List";
import "../styles/Lists.css";

const Lists = () => {
  return (
    <div className="list-container">
      {/* {list.map(()=> ())} */}
      <div className="list-container__products">
        <div className="list-container__showing">
          <span>showing: {} items</span>
        </div>
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
};

export default Lists;
