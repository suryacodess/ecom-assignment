import React from "react";
import zag from "../pngs/zag.png";
import "./sass/Aside.css";

const Aside = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="aside-inner">
        <div className="icon">
          <img src={zag} alt="zag icon" />
        </div>
        <nav>
          <ul>
            <li>Reports</li>
            <li>Workspace</li>
            <li>Setting</li>
          </ul>
        </nav>
        </div>
      </aside>
    </>
  );
};

export default Aside;
