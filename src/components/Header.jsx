import React from "react";
import plusIcon from "../pngs/Plus.png"; //png
import "../components/sass/style.css"; //styles

const Header = (props) => {
  return (
    <>
      <header className="flex justify-between items-center header h-20 w-full px-4">
        <div className="title">
          <h2 className="text-2xl font-bold">{props.title}</h2>
        </div>
        <div className="add-order-btn">
          <button className="flex items-center w-100 outline-none border-none py-2 px-3 rounded-lg">
            <img src={plusIcon} alt="plus icon" />
            <p className="text-sm ml-1"> {props.button}</p>
          </button>
        </div>
      </header>
      <div className="divider"></div>
    </>
  );
};

export default Header;
