import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Link to="pagination">Pagination Table</Link>
      <Link to="sorting">Sorting Table</Link>
    </div>
  );
};
