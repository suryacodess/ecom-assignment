import Dashboard from "./pages/Dashboard";
import "../src/index.css";
import Data from "./contexts/Data";
import jsonData from "./data";
import { useState } from "react";
import "./index.css";
function App() {


  const[data, setdata] = useState(jsonData);
  
  return (
    <Data.Provider value={[data,setdata]}>
      <Dashboard />
    </Data.Provider>
  );
}

export default App;
