import React from "react";
import "./sass/Header.css";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="add-order-btn">
          <button>{props.button}</button>
        </div>
      </header>
        <div className="divider"></div>
    </>
  );
};

export default Header;
