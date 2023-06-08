import React from "react";
import zag from "../pngs/zag.png"; //png
import up from "../pngs/Vector.png"; //png
import "./sass/style.css"; //styles
 
const Aside = () => {
  return (
    <>
      <aside className="sidebar w-60 min-h-screen flex justify-start items-center flex-col">
        <div className="aside-inner w-100 p-5 flex justify-start items-center flex-col">
          <div className="icon">
            <img className="w-20 h-10" src={zag} alt="zag icon" />
          </div>
          <nav className="w-100 mt-5 flex justify-center items-center">
            <ul className="w-100 text-center">
              <li className=" cursor-pointer list-none my-4 rounded-lg py-4 flex justify-center items-center">
                <img src={up} alt="report" />{" "}
                <p className="ml-3 text-sm"> Reports</p>
              </li>
              <li className=" cursor-pointer list-none my-4 rounded-lg py-4 flex justify-center items-center">
                <img className="text-blue-600" src={up} alt="report" />{" "}
                <p className="ml-3 text-blue-600 text-sm"> Workspace</p>
              </li>
              <li className=" cursor-pointer list-none my-4 rounded-lg py-4 flex justify-center items-center">
                <i class="fa-sharp fa-solid fa-gear"></i>
                <p className="ml-3 text-sm">Settings</p>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Aside;
