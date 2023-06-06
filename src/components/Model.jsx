import React, { useContext } from "react";
import "../components/sass/Model.css";
import UserContext from "../contexts/Model";
import QuantityContext from "../contexts/Edit";

export default function Model() {
  const [model, setModel] = useContext(UserContext);
  const [quantity] = useContext(QuantityContext);

  const handleModel = () => {
    setModel("false");
  };

  return (
    <section className="model">
      <div className="model-inner">
        <header>
          <div className="header-title">
            <h2>EDIT</h2>
          </div>
          <button onClick={handleModel}>close</button>
        </header>

        <section className="edit-inputs">
          <input
            type="text"
            value={quantity}
            onChange={(e) => e.target.value}
            placeholder="enter active orders"
          />
          <input type="text" placeholder="enter amounts" />
          <button>edit</button>
        </section>
      </div>
    </section>
  );
}
