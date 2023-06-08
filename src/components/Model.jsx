import React, { useContext } from "react";
import "../components/sass/Model.css";
import UserContext from "../contexts/Model";
import DataContext from "../contexts/Data";
import { useState } from "react";

export default function Model(props) {
  const [model, setModel] = useContext(UserContext);
  const [data, setData] = useContext(DataContext);

  const [quantity, setQuantity] = useState(props.quan);
  const [price, setPrice] = useState(props.price);

  const handleModel = () => {
    setModel("false");
  };

  const handleEdit = () => {
    console.log(quantity);

    let findData = data.find((data) => data.quantity === quantity);
    try {
      if (findData.price !== price) {
        findData.price = price;
      }
    } catch (error) {
      alert((error.message = "try again later"));
    }

    setModel(false);
  };

  return (
    <section className="model">
      <div className="model-inner">
        <header>
          <div className="header-title">
            <h2>EDIT</h2>
          </div>
          <button onClick={handleModel}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </header>

        <section className="edit-inputs">
          <div className="quantity">
            <div className="price"></div>
            <label>Enter Price</label> <br />
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="edit amount"
            />
          </div>
          <button onClick={handleEdit}>edit</button>
        </section>
      </div>
    </section>
  );
}
