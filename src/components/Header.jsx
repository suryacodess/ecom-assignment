import React from "react";
import "./sass/Header.css";
import plusIcon from "../pngs/Plus.png";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="add-order-btn">
          <button>
            <img src={plusIcon} />
            {props.button}
          </button>
        </div>
      </header>
      <div className="divider"></div>
    </>
  );
};

export default Header;
