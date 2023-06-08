import { createContext } from "react";
import jsonData from "../data";

const DataContext = createContext(jsonData);

export default DataContext;