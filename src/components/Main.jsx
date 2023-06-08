import React, { useState } from "react";
import { useContext } from "react";
import "../components/sass/style.css"; // styles
import Header from "./Header"; //header component

import UserContext from "../contexts/Model"; //context api
import DataContext from "../contexts/Data"; //context api

import jsonData from "../data"; //json data
import Model from "./Model"; //modal component
import minus from "../pngs/Rectangle 6.png"; //png

const Main = () => {
  const [data, setData] = useContext(DataContext); // context api
  const [model, setModel] = useContext(UserContext); // context api

  const [quan, setQuan] = useState(); // state
  const [price, setPrice] = useState(); // state

  //functionality for active orders - active, delivered, pending, refund, and confirmed
  const handleInput = (value) => {
    //shows all objects
    if (value === "Active") {
      setData(jsonData);
    }

    //shows cofirmed status objects
    if (value === "Confirmed") {
      let filterData = jsonData.filter((arr) => {
        return arr.status === value;
      });
      setData(filterData);
    }

    //shows delivered status objects
    if (value === "Delivered") {
      let filterData = jsonData.filter((arr) => {
        return arr.status === value;
      });
      setData(filterData);
    }

    //shoes pending status objects
    if (value === "Pending") {
      let filterData = jsonData.filter((arr) => {
        return arr.status === value;
      });
      setData(filterData);
    }

    //shows refund status objects
    if (value === "Refund") {
      let filterData = jsonData.filter((arr) => {
        return arr.status === value;
      });
      setData(filterData);
    }
  };

  // functionality for amount/price filter - low to high and high to low
  const handleAmount = (price) => {
    //shows all objects
    if (price === "Amount") {
      setData(jsonData);
    }

    //shows low to high prices objects
    if (price === "lowToHigh") {
      let low = [...data].sort((a, b) => a.price - b.price);
      setData(low);
    }

    //shows high to low prices objects
    if (price === "highToLow") {
      let high = [...data].sort((a, b) => b.price - a.price);
      setData(high);
    }
  };

  //functionality for edit button
  const handleModel = (quan, price) => {
    setModel("true"); //opens modal component
    setQuan(quan);
    setPrice(price);
  };

  return (
    <>
      {/* edit modal box  */}
      {model === "true" && <Model price={price} quan={quan} />}

      {/* main dashboard  */}
      <main className="main w-full min-h-full">
        <Header title="Orders" button="Add Orders" />

        <div className="main-inner flex flex-col px-10 pt-5">
          <div className="main-inner-data flex flex-col bg-white rounded-2xl p-5">
            <header className="main-inner-header flex justify-between items-center pt-2 pb-5">
              <p className="font-semibold text-lg">
                Confirmed <span>258</span>
              </p>
              <button className="w-9 h-9 flex justify-center items-center cursor-pointer border-none outline-none">
                <img src={minus} alt="minus" />
              </button>
            </header>
            <div className="divider"></div>

            {/* table content displays json objects */}
            <table className="mt-5">
              <tr>
                <th className="">
                  <input
                    className="text-sm font-normal"
                    placeholder="Search..."
                    type="search"
                  />
                </th>
                <th>
                  <select
                    className="text-xs font-semibold"
                    name="ACTIVE ORDERS"
                    onChange={(e) => handleInput(e.target.value)}
                  >
                    <option value="Active">ACTIVE ORDERS</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Refund">Refund Completed (3d)</option>
                    <option value="Pending">Pending</option>
                  </select>
                </th>
                <th>
                  {" "}
                  <select
                    className="text-xs font-semibold"
                    name="Amount"
                    onChange={(e) => handleAmount(e.target.value)}
                  >
                    <option value="Amount">Amount</option>
                    <option value="lowToHigh">low to High</option>
                    <option value="highToLow">High to Low</option>
                  </select>
                </th>
                <th>
                  <select className="text-xs font-semibold" name="Placed-on">
                    <option value="placedon">Placed on</option>
                    <option value="start">start</option>
                    <option value="end">end</option>
                  </select>
                </th>
                <th>
                  <select className="text-xs font-semibold" name="options">
                    <option value="volvo">Options</option>
                    <option value="volvo">Confirmed</option>
                  </select>
                </th>
              </tr>
              {data.map((data, i) => {
                return (
                  <tr key={i} id={i}>
                    <td className="py-3 text-start">
                      <div className="logo flex items-center">
                        <div className="logo-img w-16 h-11 rounded-xl flex justify-center items-center mr-5">
                          <img src={data.logo} alt="logo" />
                        </div>
                        <div className="logo-text">
                          <h5 className="text-sm font-semibold leading-5">
                            {data.brand_name}
                          </h5>
                          <p className="text-xs leading-4 font-normal">
                            {data.item}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-center">
                      <p className="text-sm font-medium">{data.quantity}</p>
                    </td>
                    <td className="py-3 text-center">
                      <p>{data.price}</p>
                    </td>
                    <td className="py-3 text-center">
                      <p>{data.placed_on}</p>
                    </td>
                    <td className="py-3 text-center">
                      <button
                        className="bg-none outline-none border-nonr cursor-pointer"
                        onClick={() => handleModel(data.quantity, data.price)}
                      >
                        <i title="edit" className="fa-solid fa-ellipsis"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
