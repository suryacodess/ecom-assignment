import React, { useContext } from "react";
import { useState } from "react";

import "../components/sass/style.css"; //styles

import UserContext from "../contexts/Model"; //context api
import DataContext from "../contexts/Data"; //context api

export default function Model(props) {
  const [model, setModel] = useContext(UserContext); // context api
  const [data, setData] = useContext(DataContext); //context api

  const [quantity, setQuantity] = useState(props.quan); // state
  const [price, setPrice] = useState(props.price); // state

  // function for closing edit modal on clicking on close button
  const handleModel = () => {
    setModel("false");
  };

  // functionality for basic edits - edit quantities of a row
  const handleEdit = () => {
    // finding the json object to edit
    let findData = data.find((data) => data.quantity === quantity);
    try {
      if (findData.price !== price) {
        findData.price = price; //adds new edited quantity value
      }
    } catch (error) {
      alert((error.message = "try again later")); //throws error if something goes wrong
    }

    setModel(false); //after clicking on edit button the modal will disappear
  };

  return (
    <section className="model min-h-screen w-full flex justify-center items-center fixed top-0 left-0 z-10">
      <div className="model-inner max-w-xs w-full h-80 flex justify-between bg-white items-center flex-col">
        <header className="w-full p-5 flex items-center justify-between">
          <div className="header-title">
            <h2>EDIT</h2>
          </div>
          <button
            onClick={handleModel}
            className="outline-none border-none cursor-pointer w-10 h-10 text-white pt-2 pb-3"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </header>

        <section className="edit-inputs h-full w-full flex justify-center items-center flex-col pt-3 pb-5">
          <div className="quantity">
            <div className="price"></div>
            <label>Enter Price</label> <br />
            <input
              className="py-3 px-3 outline-none my-3"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="edit amount"
            />
          </div>
          <button
            onClick={handleEdit}
            className="mt-3 py-2 rounded-lg px-6 text-white outline-none border-none cursor-pointer"
          >
            edit
          </button>
        </section>
      </div>
    </section>
  );
}
