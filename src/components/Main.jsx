import React, { useState } from "react";
import "../components/sass/Main.css";
import Header from "./Header";
import jsonData from "../data";

import { useContext } from "react";
import UserContext from "../contexts/Model";
// import QuantityContext from "../contexts/Edit";
import Model from "./Model";

const Main = () => {
  const [data, setData] = useState(jsonData);
  const [sort, setSort] = useState(data);
  const [reverse, setReverse] = useState(sort);

  const [model, setModel] = useContext(UserContext);
  // const [quantity, setQuantity] = useContext(QuantityContext);

  //functionality for edit
  const handleModel = (quan, price) => {
    setModel("true");
  };

  //functionality for active orders - active, delivered, pending, refund, and confirmed
  const handleInput = (value) => {
    if (value === "Active") {
      setData(jsonData);
    }

    if (value === "Confirmed") {
      let filterData = jsonData.filter((arr) => {
        return arr.status === value;
      });
      setData(filterData);
    }

    if (value === "Delivered") {
      let filterData = jsonData.filter((arr) => {
        return arr.status === value;
      });
      setData(filterData);
    }

    if (value === "Pending") {
      let filterData = jsonData.filter((arr) => {
        return arr.status === value;
      });
      setData(filterData);
    }

    if (value === "Refund") {
      let filterData = jsonData.filter((arr) => {
        return arr.status === value;
      });
      setData(filterData);
    }
  };

  // functionality for amount/price - low to high and high to low
  const handleAmount = (value) => {
    if (value === "Amount") {
      console.log(value);
      setSort(data);
    }
    if (value === "lowToHigh") {
      setSort((sort) => {
        sort.sort((a, b) => a.price - b.price);
      });
    }

    if (value === "highToLow") {
      setReverse((reverse) => {
        reverse.sort((a, b) => a.price - b.price).reverse();
      });
    }
  };

  return (
    <>
      {/* model  */}
      {model === "true" && <Model />}

      {/* main dashboard  */}
      <main className="main">
        <Header title="Orders" button="Add Orders" />

        <div className="main-inner">
          <div className="main-inner-data">
            <header className="main-inner-header">
              <p>
                Confirmed <span>258</span>
              </p>
              <button>-</button>
            </header>
            <div className="divider"></div>
            <table id="customers">
              <tr>
                <th>
                  <input type="search" />
                </th>
                <th>
                  <select
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
                    name="Amount"
                    onChange={(e) => handleAmount(e.target.value)}
                  >
                    <option value="Amount">Amount</option>
                    <option value="lowToHigh">low to High</option>
                    <option value="highToLow">High to Low</option>
                  </select>
                </th>
                <th>
                  <select name="Placed-on">
                    <option value="placedon">Placed on</option>
                    <option value="start">start</option>
                    <option value="end">end</option>
                  </select>
                </th>
                <th>
                  <select name="options">
                    <option value="volvo">Options</option>
                    <option value="volvo">Confirmed</option>
                  </select>
                </th>
              </tr>
              {data.map((data, i) => {
                return (
                  <tr key={i} id={i}>
                    <td>
                      <div className="logo">
                        <div className="logo-img">
                          <img src={data.logo} alt="" />
                        </div>
                        <div className="logo-text">
                          <h5>{data.brand_name}</h5>
                          <p>{data.item}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>{data.quantity}</p>
                    </td>
                    <td>
                      <p>{data.price}</p>
                    </td>
                    <td>
                      <p>{data.placed_on}</p>
                    </td>
                    <td>
                      <button
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
