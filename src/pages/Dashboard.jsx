import React, { useState } from "react";
import Aside from "../components/Aside";
import Main from "../components/Main";
import UserContext from "../contexts/Model";

const Dashboard = () => {
  const [model, setModel] = useState("false");
  const [quantity, setQuantity] = useState("0");

  return (
    <>
      <UserContext.Provider value={[model, setModel, quantity, setQuantity]}>
        <div className="container">
          <Aside />
          <Main />
        </div>
      </UserContext.Provider>
    </>
  );
};

export default Dashboard;
