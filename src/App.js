import React from "react";
import "./App.css";
import PaginationTable from "./components/PaginationTable";
import { Route, Routes } from "react-router-dom";
import { SortingTable } from "./components/SortingTable";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pagination" element={<PaginationTable />} />
        <Route path="sorting" element={<SortingTable />} />
      </Routes>
    </div>
  );
}

export default App;
