import React from "react";
import "./App.css";
/*import { PaginationTable } from "./components/PaginationTable"; */

import { SortingTable } from "./components/SortingTable" 
import PaginationTable from "./components/PaginationTable";
/*import FilteringTable from "./components/FilteringTable";
/*import { FilteringTable } from "./components/FilteringTable"  */
function App() {
  return(
    <div className = "App">
      <FilteringTable />
    </div>
  );
}

export default App;